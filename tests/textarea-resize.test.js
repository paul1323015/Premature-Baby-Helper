const fs = require('fs');
const path = require('path');

describe('textarea resizing', () => {
  test('every project textarea can be manually resized vertically', () => {
    const appSource = fs.readFileSync(
      path.join(__dirname, '..', 'js', 'app.jsx'),
      'utf8'
    );
    const textareaTags = appSource.match(/<textarea\b[\s\S]*?\/>/g) || [];
    const solidFoodReactionTextareas = appSource.match(
      /<label className="font-bold block mb-1">反應（以逗號分隔）<\/label>\s*<textarea\b[\s\S]*?\/>/g
    ) || [];
    const solidFoodReactionResizeHandles = appSource.match(/aria-label="拖曳調整反應欄位高度"/g) || [];
    const vaccinationSideEffectTextareas = appSource.match(
      /<label className="font-bold block mb-1">副作用（以逗號分隔）<\/label>\s*<textarea\b[\s\S]*?\/>/g
    ) || [];
    const vaccinationSideEffectResizeHandles = appSource.match(/aria-label="拖曳調整副作用欄位高度"/g) || [];

    expect(textareaTags.length).toBeGreaterThan(0);
    textareaTags.forEach(tag => {
      expect(tag).toMatch(/className="[^"]*\bresize-y\b[^"]*"/);
    });
    expect(solidFoodReactionTextareas).toHaveLength(2);
    expect(solidFoodReactionResizeHandles).toHaveLength(2);
    expect(appSource).toContain('onPointerMove={handleSolidFoodReactionResizeMove}');
    expect(vaccinationSideEffectTextareas).toHaveLength(2);
    expect(vaccinationSideEffectResizeHandles).toHaveLength(2);
    expect(appSource).toContain('onPointerMove={handleVaccinationSideEffectsResizeMove}');
  });
});
