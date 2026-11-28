const fs = require('fs');
const path = require('path');

describe('appearance mode selection', () => {
  const appSource = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'app.jsx'),
    'utf8'
  );

  test('supports light, dark, and system preference while migrating the existing setting', () => {
    expect(appSource).toMatch(/localStorage\.getItem\('sun_baby_theme_mode_v1'\)/);
    expect(appSource).toMatch(/localStorage\.getItem\('sun_baby_night_mode_v1'\) === 'true' \? 'dark' : 'light'/);
    expect(appSource).toMatch(/themeMode === 'dark' \|\| \(themeMode === 'system' && systemPrefersDark\)/);
    expect(appSource).toMatch(/window\.matchMedia\('\(prefers-color-scheme: dark\)'\)/);
    expect(appSource).toMatch(/mediaQuery\.addEventListener\('change', handleSystemColorChange\)/);
    expect(appSource).toMatch(/mediaQuery\.removeEventListener\('change', handleSystemColorChange\)/);
  });

  test('opens one accessible menu with the three direct night-mode choices', () => {
    expect(appSource).toMatch(/aria-haspopup="menu"[\s\S]*?aria-expanded=\{showThemeMenu\}/);
    expect(appSource).toMatch(/role="menu"[\s\S]*?aria-label="選擇夜間模式"/);
    expect(appSource).toMatch(/\{ value: 'dark', label: '開啟' \}/);
    expect(appSource).toMatch(/\{ value: 'light', label: '關閉' \}/);
    expect(appSource).toMatch(/\{ value: 'system', label: '跟隨裝置' \}/);
    expect(appSource).toMatch(/showToast\(`✅ 夜間模式：\$\{themeModeLabels\[mode\]\}`\)/);
    expect(appSource).toMatch(/role="menuitemradio"[\s\S]*?aria-checked=\{themeMode === option\.value\}/);
    expect(appSource).toMatch(/ReactDOM\.createPortal\([\s\S]*?document\.body/);
  });

  test('preserves the appearance choice in backups and restores older night-mode backups', () => {
    expect(appSource).toMatch(/themeMode\s*\n\s*\}\);/);
    expect(appSource).toMatch(/hasOwn\('themeMode'\) && !\['light', 'dark', 'system'\]\.includes\(backupData\.themeMode\)/);
    expect(appSource).toMatch(/addEntry\('sun_baby_theme_mode_v1', restoredThemeMode\)/);
    expect(appSource).toMatch(/setThemeMode\(backupData\.themeMode\)/);
    expect(appSource).toMatch(/setThemeMode\(backupData\.nightMode \? 'dark' : 'light'\)/);
    expect(appSource).toMatch(/'sun_baby_theme_mode_v1'/);
  });

  test('keeps the original toast styling and resets all data to the default light mode', () => {
    const resetHandler = appSource.match(
      /const handleResetNightMode = \(\) => \{([\s\S]*?)\n      \};/
    );
    const clearHandler = appSource.match(
      /const clearAppStorageData = \(\) => \{([\s\S]*?)\n      \};/
    );

    expect(appSource).toMatch(/backgroundColor: '#1e293b',\s+color: '#fff'/);
    expect(appSource).toMatch(/border: '1px solid #334155'/);
    expect(resetHandler).not.toBeNull();
    expect(resetHandler[1]).toMatch(/關閉夜間模式/);
    expect(resetHandler[1]).toMatch(/目前已關閉/);
    expect(clearHandler).not.toBeNull();
    expect(clearHandler[1]).toMatch(/setThemeMode\('light'\)/);
    expect(appSource).toMatch(/'sun_baby_theme_mode_v1'/);
  });
});
