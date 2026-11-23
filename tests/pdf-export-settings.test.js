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
});
