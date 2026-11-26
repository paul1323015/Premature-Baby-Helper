const fs = require('fs');
const path = require('path');

describe('growth record date confirmation', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );
  const submitHandler = appSource.match(
    /const processGrowthRecordSubmission = \(skipDateWarning = false\) => \{([\s\S]*?)\n      \};/
  );

  test('warns for dates after today or before the actual birth date', () => {
    expect(submitHandler).not.toBeNull();
    expect(submitHandler[1]).toMatch(/if \(!skipDateWarning\)/);
    expect(submitHandler[1]).toMatch(/selectedDateStr > todayDateStr/);
    expect(submitHandler[1]).toMatch(/birthDateStr && dateToCheck < birthDateStr/);
    expect(submitHandler[1]).toMatch(/setPendingGrowthDateWarning\(dateWarning\)/);
    expect(submitHandler[1].indexOf('setPendingGrowthDateWarning(dateWarning)')).toBeLessThan(
      submitHandler[1].indexOf('if (editingRecordId !== null)')
    );
  });

  test('lets the user return to the form or continue saving after the warning', () => {
    expect(appSource).toMatch(/aria-labelledby="growth-record-date-warning-title"/);
    expect(appSource).toMatch(/返回檢查/);
    expect(appSource).toMatch(/仍要儲存/);
    expect(appSource).toMatch(/processGrowthRecordSubmission\(true\)/);
    expect(appSource).toMatch(/若確認日期正確，仍可儲存/);
  });
});
