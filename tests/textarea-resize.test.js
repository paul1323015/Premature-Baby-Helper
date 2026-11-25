const fs = require('fs');
const path = require('path');

describe('textarea resizing', () => {
  test('every project textarea can be manually resized vertically', () => {
    const appSource = fs.readFileSync(
      path.join(__dirname, '..', 'js', 'app.jsx'),
      'utf8'
    );
    const textareaTags = appSource.match(/<textarea\b[\s\S]*?\/>/g) || [];

    expect(textareaTags.length).toBeGreaterThan(0);
    textareaTags.forEach(tag => {
      expect(tag).toMatch(/className="[^"]*\bresize-y\b[^"]*"/);
    });
  });
});
