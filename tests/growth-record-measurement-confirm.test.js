const fs = require('fs');
const path = require('path');

describe('growth record height and head circumference confirmation', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );
  const saveHandler = appSource.match(
    /const handleSaveNewGrowthRecord = newRecord => \{([\s\S]*?)\n      \};/
  );

  test('checks height and head circumference changes within seven days', () => {
    expect(saveHandler).not.toBeNull();
    expect(saveHandler[1]).toMatch(/\{ field: 'height', label: '身長', threshold: 2 \}/);
    expect(saveHandler[1]).toMatch(/\{ field: 'head', label: '頭圍', threshold: 1 \}/);
    expect(saveHandler[1]).toMatch(/record\.day <= measurementDay && record\.value !== null/);
    expect(saveHandler[1]).toMatch(/daysSincePrevious >= 7 \|\| Math\.abs\(enteredValue - previousRecord\.value\) <= threshold/);
  });

  test('allows confirmation to be declined without saving the measurement', () => {
    expect(saveHandler[1]).toMatch(/本次輸入與前次\$\{label\}紀錄差距較大/);
    expect(saveHandler[1]).toMatch(/return !window\.confirm\(/);
    expect(saveHandler[1]).toMatch(/if \(shouldStopForMeasurementWarning\) return/);
  });
});
