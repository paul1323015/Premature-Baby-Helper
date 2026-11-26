const fs = require('fs');
const path = require('path');

describe('same-day growth record confirmation', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );
  const submitHandler = appSource.match(
    /const processGrowthRecordSubmission = \(skipDateWarning = false\) => \{([\s\S]*?)\n      \};/
  );

  test('only same-day records with an overlapping measurement are flagged', () => {
    expect(submitHandler).not.toBeNull();
    expect(submitHandler[1]).toMatch(/const enteredMeasurementFields = \['weight', 'height', 'head'\]/);
    expect(submitHandler[1]).toMatch(/record\.date === cleanDate/);
    expect(submitHandler[1]).toMatch(/enteredMeasurementFields\.some\(field =>/);
    expect(submitHandler[1]).toMatch(/setPendingDuplicateGrowthRecord\(\{ record: newRecord, duplicates: duplicateRecords \}\)/);
    expect(submitHandler[1]).toMatch(/handleSaveNewGrowthRecord\(newRecord\)/);
  });

  test('duplicate prompt lists existing records and offers non-destructive choices', () => {
    expect(appSource).toMatch(/role="alertdialog"[\s\S]*?aria-modal="true"[\s\S]*?該日期已有測量紀錄/);
    expect(appSource).toMatch(/pendingDuplicateGrowthRecord\.duplicates\.map/);
    expect(appSource).toMatch(/返回檢查/);
    expect(appSource).toMatch(/仍新增/);
    expect(appSource).toMatch(/setPendingDuplicateGrowthRecord\(null\);\s+if \(pending\) handleSaveNewGrowthRecord\(pending\.record\)/);
    expect(appSource).toMatch(/系統不會覆蓋原紀錄/);
  });
});
