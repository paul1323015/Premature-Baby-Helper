const fs = require('fs');
const path = require('path');

describe('custom feeding fields', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );

  test('custom milk type and feeding method are included in saved log details', () => {
    expect(appSource).toContain("newLogMilkType === '自訂' && !newLogCustomMilkType.trim()");
    expect(appSource).toContain("newLogFeedingMethod === '自訂' && !newLogCustomFeedingMethod.trim()");
    expect(appSource).toContain("newLogMilkType === '自訂' ? newLogCustomMilkType.trim() : newLogMilkType");
    expect(appSource).toContain("newLogFeedingMethod === '自訂' ? newLogCustomFeedingMethod.trim() : newLogFeedingMethod");
    expect(appSource).toMatch(/const feedingMetadata = newLogType === 'feeding'[\s\S]*milkType, feedingMethod, feedingDetail: customDetail/);
    expect(appSource).toContain('placeholder="輸入自訂奶水種類"');
    expect(appSource).toContain('placeholder="輸入自訂餵養方式"');
  });

  test('custom values are restored for editing and legacy feeding logs remain supported', () => {
    expect(appSource).toContain("setNewLogCustomMilkType(milkType && !knownMilkTypes.includes(milkType) ? milkType : '')");
    expect(appSource).toContain("setNewLogCustomFeedingMethod(feedingMethod && !knownFeedingMethods.includes(feedingMethod) ? feedingMethod : '')");
    expect(appSource).toContain("setNewLogDetail(log.feedingDetail || '')");
    expect(appSource).toContain("const bracketMatch = logDetail.match(/^\\[([^\\]]+)\\](?:\\s*(.*))?$/)");
    expect(appSource).toContain("const tagOptions = [");
  });

  test('care log and PDF display the saved feeding detail', () => {
    expect(appSource).toMatch(/if \(log\.type === 'feeding' \|\| log\.type === 'diaper'\) return detail;/);
    expect(appSource).toContain('formatCareLogDetail(log)');
  });
});
