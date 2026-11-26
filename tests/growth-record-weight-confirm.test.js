const fs = require('fs');
const path = require('path');

describe('growth record weight confirmation', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );
  const submitHandler = appSource.match(
    /const processGrowthRecordSubmission = \(skipDateWarning = false\) => \{([\s\S]*?)\n      \};/
  );
  const saveHandler = appSource.match(
    /const handleSaveNewGrowthRecord = newRecord => \{([\s\S]*?)\n      \};/
  );

  test('weight confirmation applies only to new measurements', () => {
    expect(submitHandler).not.toBeNull();
    expect(saveHandler).not.toBeNull();
    expect(submitHandler[1].indexOf('if (editingRecordId !== null)')).toBeLessThan(
      submitHandler[1].indexOf('handleSaveNewGrowthRecord(newRecord)')
    );
    expect(saveHandler[1]).toMatch(/if \(!shouldContinue\) return/);
    expect(saveHandler[1]).toMatch(/date: newRecord\.date/);
    expect(saveHandler[1]).toMatch(/onAddGrowthRecord\(\{/);
  });

  test('confirmation compares against the nearest earlier valid weight in kilograms', () => {
    expect(saveHandler[1]).toMatch(/normalizeMetricValue\(record\.weight, 'weight'\)/);
    expect(saveHandler[1]).toMatch(/record\.day <= measurementDay && record\.weight !== null/);
    expect(saveHandler[1]).toMatch(/\.sort\(\(a, b\) => b\.day - a\.day\)\[0\]/);
    expect(saveHandler[1]).toMatch(/daysSincePrevious < 7 && Math\.abs\(enteredWeight - previousWeightRecord\.weight\) > 0\.5/);
    expect(saveHandler[1]).toMatch(/本次輸入與前次體重紀錄差距較大，請確認數值與單位是否正確/);
  });
});
