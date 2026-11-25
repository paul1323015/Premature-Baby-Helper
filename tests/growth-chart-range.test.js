const fs = require('fs');
const path = require('path');
const { getGrowthChartMaxMonth } = require('../js/chart-scale');

describe('growth chart month range', () => {
  test('defaults to 24 months and expands to include later measurements', () => {
    expect(getGrowthChartMaxMonth(11.5)).toBe(24);
    expect(getGrowthChartMaxMonth(24)).toBe(24);
    expect(getGrowthChartMaxMonth(25.1)).toBe(27);
    expect(getGrowthChartMaxMonth(36.2)).toBe(38);
  });

  test('web and PDF charts use the same dynamic month range', () => {
    const appSource = fs.readFileSync(
      path.join(__dirname, '..', 'js', 'app.jsx'),
      'utf8'
    );

    expect(appSource.match(/GrowthChartScale\.getGrowthChartMaxMonth/g)).toHaveLength(2);
    expect(appSource).toMatch(/monthTicks\.push\(maxX\)/);
  });
});
