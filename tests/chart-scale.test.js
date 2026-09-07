const {
  METRIC_DOMAINS,
  BOY_WEIGHT_PERCENTILES,
  GIRL_WEIGHT_PERCENTILES,
  mapValueToY,
  interpolatePercentile
} = require('../js/chart-scale');

describe('growth chart scale', () => {
  test('places a 7 kg boy measurement below the interpolated 11-month 3rd percentile', () => {
    const month = 11;
    const thirdPercentile = interpolatePercentile(BOY_WEIGHT_PERCENTILES, month, 1);
    const babyY = mapValueToY(7, METRIC_DOMAINS.weight);
    const percentileY = mapValueToY(thirdPercentile, METRIC_DOMAINS.weight);

    expect(thirdPercentile).toBeCloseTo(7.6, 5);
    expect(babyY).toBeGreaterThan(percentileY);
  });

  test('keeps the weight chart Y-axis domain fixed at 0 to 16 kg', () => {
    expect(METRIC_DOMAINS.weight).toEqual({ min: 0, max: 16 });
  });

  test('places a 6.5 kg girl measurement below the interpolated 11-month 3rd percentile', () => {
    const month = 11;
    const thirdPercentile = interpolatePercentile(GIRL_WEIGHT_PERCENTILES, month, 1);
    const babyY = mapValueToY(6.5, METRIC_DOMAINS.weight);
    const percentileY = mapValueToY(thirdPercentile, METRIC_DOMAINS.weight);

    expect(thirdPercentile).toBeCloseTo(6.85, 5);
    expect(babyY).toBeGreaterThan(percentileY);
  });

  test('places a 7.2 kg girl measurement above the 3rd percentile and within the 3rd-15th percentile band', () => {
    const month = 11;
    const thirdPercentile = interpolatePercentile(GIRL_WEIGHT_PERCENTILES, month, 1);
    const fifteenthPercentile = interpolatePercentile(GIRL_WEIGHT_PERCENTILES, month, 2);
    const babyY = mapValueToY(7.2, METRIC_DOMAINS.weight);
    const thirdPercentileY = mapValueToY(thirdPercentile, METRIC_DOMAINS.weight);
    const fifteenthPercentileY = mapValueToY(fifteenthPercentile, METRIC_DOMAINS.weight);

    expect(thirdPercentile).toBeCloseTo(6.85, 5);
    expect(babyY).toBeLessThan(thirdPercentileY);
    expect(babyY).toBeGreaterThan(fifteenthPercentileY);
  });

  test('contains complete boy and girl WHO weight matrices through 24 months', () => {
    expect(BOY_WEIGHT_PERCENTILES).toHaveLength(13);
    expect(GIRL_WEIGHT_PERCENTILES).toHaveLength(13);
    expect(BOY_WEIGHT_PERCENTILES.every((row) => row.length === 6)).toBe(true);
    expect(GIRL_WEIGHT_PERCENTILES.every((row) => row.length === 6)).toBe(true);
    expect(BOY_WEIGHT_PERCENTILES[0][0]).toBe(-2);
    expect(BOY_WEIGHT_PERCENTILES[BOY_WEIGHT_PERCENTILES.length - 1][0]).toBe(24);
    expect(GIRL_WEIGHT_PERCENTILES[0][0]).toBe(-2);
    expect(GIRL_WEIGHT_PERCENTILES[GIRL_WEIGHT_PERCENTILES.length - 1][0]).toBe(24);
  });
});
