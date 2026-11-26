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

  test('web chart labels every month on the X axis', () => {
    const appSource = fs.readFileSync(
      path.join(__dirname, '..', 'js', 'app.jsx'),
      'utf8'
    );

    expect(appSource).toMatch(/for \(let m = minX; m <= maxX; m \+= 1\)/);
    expect(appSource).not.toMatch(/const step = \(maxX - minX\) > 16 \? 2 : 1/);
    expect(appSource).toMatch(/\{mVal\}/);
    expect(appSource).not.toMatch(/\{isZero \? '0個月' : `\$\{mVal\}個`\}/);
  });

  test('web chart Y-axis tick labels match the X-axis number-only styling', () => {
    const appSource = fs.readFileSync(
      path.join(__dirname, '..', 'js', 'app.jsx'),
      'utf8'
    );

    expect(appSource).toMatch(/textAnchor="end" className="fill-slate-500 font-mono text-\[9px\] font-medium">\{yVal\}<\/text>/);
    expect(appSource).not.toMatch(/\{yVal\} \{metricConfig\.unit\}/);
  });

  test('WHO percentile curves require corrected age with a due date', () => {
    const appSource = fs.readFileSync(
      path.join(__dirname, '..', 'js', 'app.jsx'),
      'utf8'
    );

    expect(appSource).toMatch(/const canShowPercentiles = !useChronoAxis && Boolean\(babyInfo\.dueDate\)/);
    expect(appSource).toMatch(/showPercentiles && canShowPercentiles && percentileIndices\.map/);
    expect(appSource).toMatch(/if \(showPercentiles && babyInfo\.dueDate\)/);
    expect(appSource).toContain('預產期前僅顯示測量點，不提供 WHO 百分位判讀。');
  });

  test('measurement age labels use the same day-based age as chart positions', () => {
    const appSource = fs.readFileSync(
      path.join(__dirname, '..', 'js', 'app.jsx'),
      'utf8'
    );

    expect(appSource).toMatch(/const chartAgeDays = useChronoAxis \? ages\.chronoDays : ages\.correctedDays/);
    expect(appSource).toMatch(/formatAgeText\(chartAgeDays, useChronoAxis \? '實際' : '矯正', true\)/);
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
