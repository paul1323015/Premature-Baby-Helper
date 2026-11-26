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

  test('PDF export resets its busy state if the asynchronous download callback stalls', () => {
    expect(appSource).toMatch(/let exportFinished = false/);
    expect(appSource).toMatch(/window\.setTimeout\(\(\) => \{[\s\S]*?finishExport\(false, '❌ PDF 報告產生或下載逾時/);
    expect(appSource).toMatch(/if \(exportFinished\) return;[\s\S]*?setIsExporting\(false\)/);
    expect(appSource).toMatch(/finishExport\(true\)/);
  });

  test('PDF export surfaces asynchronous generation errors and removes its listener on completion', () => {
    expect(appSource).toMatch(/window\.addEventListener\('unhandledrejection', exportUnhandledRejectionHandler\)/);
    expect(appSource).toMatch(/window\.removeEventListener\('unhandledrejection', exportUnhandledRejectionHandler\)/);
    expect(appSource).toMatch(/Asynchronous PDF export failure:/);
    expect(appSource).toMatch(/detail\.slice\(0, 100\)/);
  });

  test('growth-record PDF table uses supported absolute and wildcard column widths', () => {
    expect(appSource).toMatch(/widths: \[110, 74, 74, 74, '\*'\]/);
    expect(appSource).not.toMatch(/widths: \['[\d.]+\*'/);
  });

  test('PDF export settings in backups are validated', () => {
    expect(appSource).toMatch(/if \(hasOwn\('pdfExportOptions'\)\) \{/);
    expect(appSource).toMatch(/'profile', 'growth', 'growthRecords', 'growthChart', 'milestones', 'todayMilkProgress', 'careReminders', 'careLogs', 'doctor', 'notes', 'encryptPdf'/);
    expect(appSource).toMatch(/!\['all', '7', '30', '90', 'custom'\]\.includes\(options\.range\)/);
  });

  test('growth records and chart have separate PDF export settings', () => {
    expect(appSource).toMatch(/growthRecords: true,\s+growthChart: true/);
    expect(appSource).toMatch(/\['growthRecords', '生長測量紀錄表'\]/);
    expect(appSource).toMatch(/\['growthChart', '矯正月齡生長曲線圖'\]/);
    expect(appSource).toMatch(/pdfExportOptions\.growthRecords/);
    expect(appSource).toMatch(/pdfExportOptions\.growthChart/);
  });

  test('corrected-age milestone checklist has a PDF setting and exports completion state', () => {
    expect(appSource).toMatch(/growthChart: true,\s+milestones: true/);
    expect(appSource).toMatch(/\['milestones', '矯正月齡發展里程碑檢核'\]/);
    expect(appSource).toMatch(/\.\.\.\(pdfExportOptions\.milestones \?/);
    expect(appSource).toMatch(/text: '矯正月齡發展里程碑檢核'/);
    expect(appSource).toMatch(/milestone\.done \? '已完成' : '未完成'/);
    expect(appSource).toMatch(/text: milestone\.text \|\| '—'/);
    expect(appSource).toMatch(/'milestones', 'todayMilkProgress', 'careReminders', 'careLogs'/);
  });

  test('today milk progress and care reminders have separate PDF settings and export summaries', () => {
    expect(appSource).toMatch(/milestones: true,\s+todayMilkProgress: true,\s+careReminders: true/);
    expect(appSource).toMatch(/'milestones', 'todayMilkProgress', 'careReminders', 'careLogs'/);
    expect(appSource).toMatch(/\['todayMilkProgress', '今日總奶量進度'\]/);
    expect(appSource).toMatch(/\['careReminders', '照護提醒'\]/);
    expect(appSource).toMatch(/pdfExportOptions\.todayMilkProgress/);
    expect(appSource).toMatch(/已記錄奶量：\$\{todayTotalMilk\} ml \/ 每日目標：/);
    expect(appSource).toMatch(/pdfExportOptions\.careReminders/);
    expect(appSource).toMatch(/pdfCareReminders\.map\(reminder => \{/);
    expect(appSource).toMatch(/'已到期' : '預定'/);
    expect(appSource).toMatch(/formatReminderDateTimeInput\(new Date\(reminder\.dueAt\)\)/);
    expect(appSource).toMatch(/repeatInterval === null/);
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

  test('password and confirmation visibility controls are independent and hidden by default', () => {
    expect(appSource).toMatch(/const \[showPdfPassword, setShowPdfPassword\] = React\.useState\(false\)/);
    expect(appSource).toMatch(/const \[showPdfPasswordConfirm, setShowPdfPasswordConfirm\] = React\.useState\(false\)/);
    expect(appSource).toMatch(/type=\{showPdfPassword \? 'text' : 'password'\}/);
    expect(appSource).toMatch(/type=\{showPdfPasswordConfirm \? 'text' : 'password'\}/);
    expect(appSource).toMatch(/onClick=\{\(\) => setShowPdfPassword\(\(visible\) => !visible\)\}/);
    expect(appSource).toMatch(/onClick=\{\(\) => setShowPdfPasswordConfirm\(\(visible\) => !visible\)\}/);
    expect(appSource.match(/<Icon name="eye" className="w-5 h-5" strokeWidth=\{1\.5\} \/>/g)).toHaveLength(2);
    expect(appSource).toContain('eye: <g><path d="M2 12c2.5-4.5 5.8-7 10-7c4.2 0 7.5 2.5 10 7c-2.5 4.5-5.8 7-10 7c-4.2 0-7.5-2.5-10-7Z" />');
  });
});
