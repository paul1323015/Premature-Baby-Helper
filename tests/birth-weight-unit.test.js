const fs = require('fs');
const path = require('path');

describe('birth weight unit', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );

  test('profile input and PDF reports show birth weight in grams', () => {
    expect(appSource).toContain('出生體重(g)');
    expect(appSource).toContain('placeholder="1450"');
    expect(appSource.match(/babyInfo\.birthWeight \? `\$\{babyInfo\.birthWeight\} g` : '未填寫'/g)).toHaveLength(2);
  });

  test('legacy kilogram birth weights are converted when profiles load or restore', () => {
    expect(appSource).toMatch(/const normalizeBirthWeightToGrams = value =>/);
    expect(appSource).toMatch(/weight > 0 && weight < 30 \? weight \* 1000 : weight/);
    expect(appSource).toContain('parsed.birthWeight = normalizeBirthWeightToGrams(parsed.birthWeight)');
    expect(appSource).toContain('cleanedProfile.birthWeight = normalizeBirthWeightToGrams(cleanedProfile.birthWeight)');
  });
});
