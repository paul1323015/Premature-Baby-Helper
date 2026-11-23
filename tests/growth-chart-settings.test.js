const fs = require('fs');
const path = require('path');

describe('Growth chart settings persistence', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );

  test('growth chart settings load and save locally', () => {
    expect(appSource).toMatch(/localStorage\.getItem\('sun_baby_growth_chart_options_v1'\)/);
    expect(appSource).toMatch(/localStorage\.setItem\('sun_baby_growth_chart_options_v1', JSON\.stringify\(options\)\)/);
    expect(appSource).toMatch(/setShowPercentiles = value =>/);
    expect(appSource).toMatch(/setShowZeroBaseline = value =>/);
    expect(appSource).toMatch(/setUseChronoAxis = value =>/);
  });

  test('growth chart settings are validated, backed up, and restored', () => {
    expect(appSource).toMatch(/pdfExportOptions,\s+growthChartOptions/);
    expect(appSource).toMatch(/if \(hasOwn\('growthChartOptions'\)\) \{/);
    expect(appSource).toMatch(/'showPercentiles', 'showZeroBaseline', 'useChronoAxis'/);
    expect(appSource).toMatch(/addEntry\('sun_baby_growth_chart_options_v1', \{/);
    expect(appSource).toMatch(/setGrowthChartOptions\(restoredGrowthChartOptions\)/);
    expect(appSource).toMatch(/useChronoAxis=\{useChronoAxis\}/);
  });

  test('growth chart settings can be reset and clear-all restores their defaults', () => {
    expect(appSource).toMatch(/useChronoAxis: false/);
    expect(appSource).toMatch(/const handleResetGrowthChartSettings = \(\) => \{/);
    expect(appSource).toMatch(/setGrowthChartOptions\(DEFAULT_GROWTH_CHART_OPTIONS\);\s+try \{\s+localStorage\.setItem\('sun_baby_growth_chart_options_v1'/);
    expect(appSource).toMatch(/重設生長曲線\/月齡模式顯示設定/);
    expect(appSource).toMatch(/'sun_baby_growth_chart_options_v1',[\s\S]*?setGrowthChartOptions\(DEFAULT_GROWTH_CHART_OPTIONS\)/);
  });
});
