const fs = require('fs');
const path = require('path');

describe('profile birth and due date order confirmation', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );
  const saveHandler = appSource.match(
    /const handleSaveProfile = \(e\) => \{([\s\S]*?)\n      \};/
  );

  test('shows same-day text but no directional arrows between the date fields', () => {
    expect(appSource).toMatch(/profileBirthDate\.getTime\(\) === profileDueDate\.getTime\(\)\s*\?\s*'同日'/);
    expect(appSource).not.toMatch(/text: '[←→]'/);
    expect(appSource).toMatch(/>\s*\{birthDueDateRelation\}\s*</);
  });

  test('asks before saving when the actual birth date is later than the due date', () => {
    expect(saveHandler).not.toBeNull();
    expect(saveHandler[1]).toMatch(/birthDate && dueDate && birthDate > dueDate/);
    expect(saveHandler[1]).toMatch(/請確認日期是否填反/);
    expect(saveHandler[1]).toMatch(/if \(!shouldContinue\) return/);
    expect(saveHandler[1]).toMatch(/cleanedForm\.birthDueDateOrderConfirmed = true/);
    expect(saveHandler[1]).toMatch(/setBabyInfo\(cleanedForm\)/);
    expect(saveHandler[1]).not.toMatch(/birthDate: cleanedForm\.dueDate|dueDate: cleanedForm\.birthDate/);
    expect(appSource).toMatch(/pb\.getTime\(\) > pd\.getTime\(\) && parsed\.birthDueDateOrderConfirmed !== true/);
  });
});
