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
    expect(appSource).toMatch(/const solidFoodNotes = log\.notes \|\| solidFoodRecord\?\.notes/);
  });

  test('care log entries show solid food amount, allergy level, reactions, and notes', () => {
    expect(appSource).toMatch(/record\.id === log\.sourceId/);
    expect(appSource).toContain('過敏等級：{solidFoodRecord.allergySeverity');
    expect(appSource).toContain('反應：{solidFoodReactions || \'無\'}');
    expect(appSource).toContain('備註：{solidFoodNotes}');
    expect(appSource).toMatch(/solidFoodRecord\?\.amount\s*\?/);
  });

  test('both PDF views include care log supplements and amount', () => {
    expect(appSource.match(/formatCareLogSupplement\(log\)/g)).toHaveLength(2);
    expect(appSource.match(/formatCareLogAmount\(log\)/g)).toHaveLength(2);
    expect(appSource).toContain('whitespace-pre-wrap">{[formatCareLogDetail(log), formatCareLogSupplement(log)]');
    expect(appSource).toMatch(/notes: newLogNotes\.trim\(\)/);
    expect(appSource).toContain('備註（選填）');
    expect(appSource).toContain('細節（選填）');
  });
});
