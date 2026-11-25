const {
  METRIC_DOMAINS,
  WHO_GROWTH_DATA,
  WHO_GROWTH_DATA_SOURCES,
  BOY_WEIGHT_PERCENTILES,
  GIRL_WEIGHT_PERCENTILES,
  mapValueToY,
  interpolatePercentile
} = require('../js/chart-scale');

describe('growth chart scale', () => {
  test('places a 7 kg boy measurement below the WHO day-365 3rd percentile', () => {
    const month = 365 / 30.4375;
    const thirdPercentile = interpolatePercentile(BOY_WEIGHT_PERCENTILES, month, 1);
    const babyY = mapValueToY(7, METRIC_DOMAINS.weight);
    const percentileY = mapValueToY(thirdPercentile, METRIC_DOMAINS.weight);

    expect(thirdPercentile).toBeCloseTo(7.844, 3);
    expect(babyY).toBeGreaterThan(percentileY);
  });

  test('keeps the weight chart Y-axis domain fixed at 0 to 16 kg', () => {
    expect(METRIC_DOMAINS.weight).toEqual({ min: 0, max: 16 });
  });

  test('places a 6.5 kg girl measurement below the WHO day-365 3rd percentile', () => {
    const month = 365 / 30.4375;
    const thirdPercentile = interpolatePercentile(GIRL_WEIGHT_PERCENTILES, month, 1);
    const babyY = mapValueToY(6.5, METRIC_DOMAINS.weight);
    const percentileY = mapValueToY(thirdPercentile, METRIC_DOMAINS.weight);

    expect(thirdPercentile).toBeCloseTo(7.14, 3);
    expect(babyY).toBeGreaterThan(percentileY);
  });

  test('places a 7.2 kg girl measurement above the 3rd percentile and within the 3rd-15th percentile band', () => {
    const month = 365 / 30.4375;
    const thirdPercentile = interpolatePercentile(GIRL_WEIGHT_PERCENTILES, month, 1);
    const fifteenthPercentile = interpolatePercentile(GIRL_WEIGHT_PERCENTILES, month, 2);
    const babyY = mapValueToY(7.2, METRIC_DOMAINS.weight);
    const thirdPercentileY = mapValueToY(thirdPercentile, METRIC_DOMAINS.weight);
    const fifteenthPercentileY = mapValueToY(fifteenthPercentile, METRIC_DOMAINS.weight);

    expect(thirdPercentile).toBeCloseTo(7.14, 3);
    expect(babyY).toBeLessThan(thirdPercentileY);
    expect(babyY).toBeGreaterThan(fifteenthPercentileY);
  });

  test('contains daily WHO data and exact monthly points for all six measures through 24 months', () => {
    for (const sex of ['boy', 'girl']) {
      for (const metric of ['weight', 'height', 'head']) {
        const rows = WHO_GROWTH_DATA[sex][metric];
        const ages = rows.map(row => row[0]);

        expect(rows[0][0]).toBe(0);
        expect(rows[rows.length - 1][0]).toBe(24);
        expect(rows.every(row => row.length === 6 && row[0] >= 0)).toBe(true);
        for (let month = 0; month <= 24; month += 1) {
          expect(ages).toContain(month);
        }
        for (let i = 1; i < ages.length; i += 1) {
          expect(ages[i] - ages[i - 1]).toBeLessThanOrEqual(1 / 30.4375 + 0.000002);
        }
        expect(WHO_GROWTH_DATA_SOURCES[metric][sex]).toContain('cdn.who.int');
      }
    }
  });
});
