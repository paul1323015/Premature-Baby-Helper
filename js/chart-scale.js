(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.GrowthChartScale = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const METRIC_DOMAINS = {
    weight: { min: 0, max: 16 },
    height: { min: 35, max: 95 },
    head: { min: 25, max: 52 }
  };

  const BOY_WEIGHT_PERCENTILES = [
    [-2, 1.2, 1.5, 2.0, 2.5, 3.0],
    [0, 2.5, 2.9, 3.3, 3.9, 4.4],
    [1, 3.4, 3.9, 4.5, 5.1, 5.8],
    [2, 4.3, 4.9, 5.6, 6.3, 7.1],
    [3, 5.0, 5.7, 6.4, 7.2, 8.0],
    [4, 5.6, 6.2, 7.0, 7.8, 8.7],
    [5, 6.0, 6.7, 7.5, 8.4, 9.3],
    [6, 6.4, 7.1, 7.9, 8.8, 9.8],
    [8, 6.9, 7.7, 8.6, 9.6, 10.7],
    [10, 7.4, 8.2, 9.2, 10.2, 11.4],
    [12, 7.8, 8.6, 9.6, 10.8, 12.0]
  ];

  const GIRL_WEIGHT_PERCENTILES = [
    [-2, 1.1, 1.4, 1.9, 2.4, 2.9],
    [0, 2.4, 2.8, 3.2, 3.7, 4.2],
    [1, 3.2, 3.6, 4.2, 4.8, 5.5],
    [2, 3.9, 4.5, 5.1, 5.8, 6.6],
    [3, 4.5, 5.2, 5.8, 6.6, 7.5],
    [4, 5.0, 5.7, 6.4, 7.3, 8.2],
    [5, 5.4, 6.1, 6.9, 7.8, 8.8],
    [6, 5.7, 6.5, 7.3, 8.2, 9.3],
    [8, 6.3, 7.0, 7.9, 9.0, 10.2],
    [10, 6.7, 7.5, 8.5, 9.6, 10.9],
    [12, 7.0, 7.9, 8.9, 10.1, 11.5],
    [18, 8.1, 9.1, 10.2, 11.5, 13.0],
    [24, 9.0, 10.2, 11.5, 13.0, 14.8]
  ];

  function mapValueToY(value, domain, height = 340, padding = { top: 25, bottom: 55 }) {
    return height - padding.bottom -
      ((value - domain.min) / (domain.max - domain.min)) *
      (height - padding.top - padding.bottom);
  }

  function interpolatePercentile(rows, month, percentileIndex) {
    if (month <= rows[0][0]) return rows[0][percentileIndex];
    for (let i = 1; i < rows.length; i += 1) {
      const previous = rows[i - 1];
      const current = rows[i];
      if (month <= current[0]) {
        const ratio = (month - previous[0]) / (current[0] - previous[0]);
        return previous[percentileIndex] + ratio * (current[percentileIndex] - previous[percentileIndex]);
      }
    }
    return rows[rows.length - 1][percentileIndex];
  }

  return {
    METRIC_DOMAINS,
    BOY_WEIGHT_PERCENTILES,
    GIRL_WEIGHT_PERCENTILES,
    mapValueToY,
    interpolatePercentile
  };
});
