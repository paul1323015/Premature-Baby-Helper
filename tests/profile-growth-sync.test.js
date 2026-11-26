const fs = require('fs');
const path = require('path');

describe('profile measurements stay in sync with growth history', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );

  test('latest recorded measurements update the matching profile fields', () => {
    expect(appSource).toMatch(/const sortedHistory = \[\.\.\.growthHistory\]\s*\.sort\(\(a, b\) => new Date\(b\.date \|\| 0\) - new Date\(a\.date \|\| 0\)\)/);
    expect(appSource).toContain("sortedHistory.find(item => typeof item.weight !== 'undefined' && item.weight !== null)");
    expect(appSource).toContain("sortedHistory.find(item => typeof item.height !== 'undefined' && item.height !== null)");
    expect(appSource).toContain("sortedHistory.find(item => typeof item.head !== 'undefined' && item.head !== null)");
    expect(appSource).toContain('currentWeight: latestWeight.weight');
    expect(appSource).toContain('currentHeight: latestHeight.height');
    expect(appSource).toContain('currentHead: latestHead.head');
    expect(appSource).toMatch(/\}, \[growthHistory\]\);/);
  });
});
