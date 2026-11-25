const fs = require('fs');
const path = require('path');

describe('growth measurement notes', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );

  test('notes are captured, restored for editing, and shown in measurement history', () => {
    expect(appSource).toContain("const [recNotes, setRecNotes] = React.useState('')");
    expect(appSource).toContain('notes: recNotes.trim()');
    expect(appSource).toContain("setRecNotes(rec.notes || '')");
    expect(appSource).toContain('備註：{rec.notes}');
    expect(appSource).toContain('setRecNotes(\'\')');
  });

  test('both PDF exports include measurement notes', () => {
    expect(appSource).toContain("{ text: '備註', style: 'tableHeader' }");
    expect(appSource).toContain("{ text: rec.notes || '—', style: 'tableCell' }");
    expect(appSource).toContain('<th className="p-2 border-b">備註</th>');
    expect(appSource).toContain('<td className="p-2 whitespace-pre-wrap">{rec.notes || \'—\'}</td>');
  });

  test('the optional note field can be resized on touch screens', () => {
    expect(appSource).toContain('aria-label="拖曳調整測量備註欄位高度"');
    expect(appSource).toContain('onPointerMove={handleRecNotesResizeMove}');
  });
});
