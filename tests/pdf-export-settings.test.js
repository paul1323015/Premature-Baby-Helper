const fs = require('fs');
const path = require('path');

describe('PDF export settings persistence', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );

  test('PDF draft controls do not write to localStorage', () => {
    const localStorageWrites = appSource.match(
      /localStorage\.setItem\('sun_baby_pdf_export_options_v1'/g
    ) || [];
    expect(localStorageWrites).toHaveLength(2);
  });

  test('PDF draft is written only by explicit save or reset actions', () => {
    const pdfDraftUsages = [
      /checked=\{pdfExportDraft\[key\]\}/,
      /checked=\{pdfExportDraft\.showExportTime\}/,
      /value=\{pdfExportDraft\.range\}/,
      /localStorage\.setItem\('sun_baby_pdf_export_options_v1', JSON\.stringify\(pdfExportDraft\)\)/
    ];

    pdfDraftUsages.forEach((usage) => {
      expect(appSource).toMatch(usage);
    });

    expect(appSource).toMatch(
      /localStorage\.setItem\('sun_baby_pdf_export_options_v1', JSON\.stringify\(DEFAULT_PDF_EXPORT_OPTIONS\)\)/
    );
  });

  test('PDF export settings are included in backups and restored', () => {
    expect(appSource).toMatch(/doctorQuestions: doctorNotes,\s+pdfExportOptions/);
    expect(appSource).toMatch(/addEntry\('sun_baby_pdf_export_options_v1', normalizePdfExportOptions\(backupData\.pdfExportOptions\)\)/);
    expect(appSource).toMatch(/setPdfExportOptions\(restoredPdfExportOptions\)/);
    expect(appSource).toMatch(/setPdfExportDraft\(\{ \.\.\.restoredPdfExportOptions \}\)/);
  });

  test('PDF export settings in backups are validated', () => {
    expect(appSource).toMatch(/if \(hasOwn\('pdfExportOptions'\)\) \{/);
    expect(appSource).toMatch(/'profile', 'growth', 'growthRecords', 'growthChart', 'careLogs', 'doctor', 'notes', 'encryptPdf'/);
    expect(appSource).toMatch(/!\['all', '7', '30', '90', 'custom'\]\.includes\(options\.range\)/);
  });

  test('growth records and chart have separate PDF export settings', () => {
    expect(appSource).toMatch(/growthRecords: true,\s+growthChart: true/);
    expect(appSource).toMatch(/\['growthRecords', '生長測量紀錄表'\]/);
    expect(appSource).toMatch(/\['growthChart', '生長曲線圖'\]/);
    expect(appSource).toMatch(/pdfExportOptions\.growthRecords/);
    expect(appSource).toMatch(/pdfExportOptions\.growthChart/);
  });

  test('legacy growth export setting maps to both separate options', () => {
    expect(appSource).toMatch(/if \(typeof options\.growth === 'boolean'\)/);
    expect(appSource).toMatch(/normalized\.growthRecords = options\.growth/);
    expect(appSource).toMatch(/normalized\.growthChart = options\.growth/);
  });

  test('hidden growth chart lines are noted when the chart is selected', () => {
    expect(appSource).toMatch(/pdfExportDraft\.growthChart && \(!showPercentiles \|\| !showZeroBaseline\)/);
    expect(appSource).toMatch(/目前圖表的\{!showPercentiles && !showZeroBaseline \?/);
    expect(appSource).toMatch(/匯出 PDF 時也不會顯示/);
  });

  test('encrypted PDF is opt-in and requests an unsaved password at export time', () => {
    expect(appSource).toMatch(/encryptPdf: false/);
    expect(appSource).toMatch(/checked=\{pdfExportDraft\.encryptPdf\}/);
    expect(appSource).toMatch(/pdfExportOptions\.encryptPdf && \(typeof password !== 'string' \|\| Array\.from\(password\)\.length < 4 \|\| Array\.from\(password\)\.length > 8\)/);
    expect(appSource).toMatch(/onClick=\{\(\) => handleDownloadPDF\(\)\}/);
    expect(appSource).toMatch(/userPassword: password/);
    expect(appSource).toMatch(/version: '1\.7ext3'/);
    expect(appSource).toMatch(/Array\.from\(pdfPassword\)\.length < 4 \|\| Array\.from\(pdfPassword\)\.length > 8/);
    expect(appSource).toMatch(/pdfPassword !== pdfPasswordConfirm/);
    expect(appSource).toMatch(/handleConfirmPdfPassword/);
    expect(appSource).toMatch(/密碼不會儲存；忘記密碼後，巴掌小太陽無法取回/);
    expect(appSource).not.toMatch(/pdfPassword:\s*pdfPassword/);
    expect(appSource).not.toMatch(/localStorage\.(?:getItem|setItem)\([^)]*pdfPassword/);
    const backupPayload = appSource.match(/const createBackupPayload = \(\) => \(\{([\s\S]*?)\n\s*\}\);/);
    expect(backupPayload).not.toBeNull();
    expect(backupPayload[1]).not.toMatch(/pdfPassword/);
  });
});
