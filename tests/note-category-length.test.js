const fs = require('fs');
const path = require('path');

describe('custom note category length', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );

  test('custom category shows its counter and limits typed and spoken input', () => {
    expect(appSource).toMatch(/自訂分類（最多 \{NOTE_CATEGORY_MAX_LENGTH\} 字）/);
    expect(appSource).toMatch(/\{noteCategory\.length\}\/\{NOTE_CATEGORY_MAX_LENGTH\}/);
    expect(appSource).toContain('maxLength={NOTE_CATEGORY_MAX_LENGTH}');
    expect(appSource).toMatch(/field === 'category' \? NOTE_CATEGORY_MAX_LENGTH/);
    expect(appSource).toContain('const insertedText = transcript.slice(0, availableLength)');
  });
});
