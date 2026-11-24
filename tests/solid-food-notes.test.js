const fs = require('fs');
const path = require('path');

describe('solid food notes', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );

  test('notes are editable, saved, restored, and shown in care logs', () => {
    expect(appSource).toMatch(/foodName: '', date: getLocalDateInputValue\(\), amount: '', allergySeverity: 'none', reactions: '', notes: ''/);
    expect(appSource.match(/placeholder="記錄試吃情形或其他觀察\.\.\."/g)).toHaveLength(2);
    expect(appSource).toMatch(/notes: solidFoodForm\.notes\.trim\(\)/);
    expect(appSource).toMatch(/notes: record\.notes \|\| ''/);
    expect(appSource).toMatch(/\{log\.notes && <p className="text-xs text-slate-500 whitespace-pre-wrap">\{log\.notes\}<\/p>\}/);
  });
});
