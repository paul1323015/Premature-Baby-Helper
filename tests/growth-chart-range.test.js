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

  test('chart scale helper shares the app bundle cache version', () => {
    const indexSource = fs.readFileSync(
      path.join(__dirname, '..', 'index.html'),
      'utf8'
    );
    const timestampScript = fs.readFileSync(
      path.join(__dirname, '..', 'scripts', 'update-app-timestamp.js'),
      'utf8'
    );

    const appBundleVersion = indexSource.match(/\.\/js\/app\.bundle\.js\?v=(\d+)/);
    const chartScaleVersion = indexSource.match(/\.\/js\/chart-scale\.js\?v=(\d+)/);

    expect(appBundleVersion).not.toBeNull();
    expect(chartScaleVersion).not.toBeNull();
    expect(chartScaleVersion[1]).toBe(appBundleVersion[1]);
    expect(timestampScript).toMatch(/chartScaleTimestampPattern/);
  });
});
