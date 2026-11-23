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
    expect(appSource).toMatch(/addEntry\('sun_baby_pdf_export_options_v1', \{/);
    expect(appSource).toMatch(/setPdfExportOptions\(restoredPdfExportOptions\)/);
    expect(appSource).toMatch(/setPdfExportDraft\(\{ \.\.\.restoredPdfExportOptions \}\)/);
  });

  test('PDF export settings in backups are validated', () => {
    expect(appSource).toMatch(/if \(hasOwn\('pdfExportOptions'\)\) \{/);
    expect(appSource).toMatch(/!\['all', '7', '30', '90', 'custom'\]\.includes\(options\.range\)/);
  });

  test('hidden growth chart lines are noted in PDF settings when growth is selected', () => {
    expect(appSource).toMatch(/pdfExportDraft\.growth && \(!showPercentiles \|\| !showZeroBaseline\)/);
    expect(appSource).toMatch(/目前圖表的\{!showPercentiles && !showZeroBaseline \?/);
    expect(appSource).toMatch(/匯出 PDF 時也不會顯示/);
  });
});
