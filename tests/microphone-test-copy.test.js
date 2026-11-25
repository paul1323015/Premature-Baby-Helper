const fs = require('fs');
const path = require('path');

describe('microphone test copy', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );

  test('played-status copy uses the standard dark text color', () => {
    expect(appSource).toContain('text-slate-800');
    expect(appSource).toContain('播放完成；若沒聽清楚，可再按「測試麥克風」試一次');
    expect(appSource).toContain('正在等待麥克風權限，請依瀏覽器提示選擇允許');
    expect(appSource).toContain('正在準備播放測試錄音');
    expect(appSource).toContain('錄音完成，請播放確認是否聽見自己的聲音');
    expect(appSource).toContain('<div className="mt-1">');
  });
});
