const fs = require('fs');
const path = require('path');

// Configuration
const ROOT = path.resolve(__dirname); // project root
const SW_PATH = path.join(ROOT, 'service-worker.js');
const MANIFEST_PATH = path.join(ROOT, 'assets-manifest.json');
const IGNORE_DIRS = new Set(['node_modules', '.git', '.vs', 'dist']);
const IGNORE_FILES = new Set(['.DS_Store']);

function toWebPath(p) {
  // convert Windows backslashes to forward slashes and ensure leading slash
  let rp = p.split(path.sep).join('/');
  if (!rp.startsWith('/')) rp = '/' + rp;
  return rp;
}

function walk(dir, base) {
  base = base || '';
  let results = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (IGNORE_FILES.has(file)) continue;
    const full = path.join(dir, file);
    const rel = path.join(base, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (IGNORE_DIRS.has(file)) continue;
      results = results.concat(walk(full, rel));
    } else if (stat.isFile()) {
      results.push(rel);
    }
  }
  return results;
}

function generateAssetsList() {
  const files = walk(ROOT, '');
  // Filter out README.md and this generator script, and hidden files, and source maps
  const filtered = files
    .filter(f => f !== 'service-worker.js')
    .filter(f => f !== 'generate-cache-list.js')
    .filter(f => f !== 'README.md')
    .filter(f => !f.startsWith('scripts' + path.sep))
    .filter(f => f !== 'package-lock.json' && f !== 'package.json')
    .filter(f => !f.endsWith('.map'))
    .filter(f => !f.endsWith('.bak'))
    .filter(f => !['external-resources.json','assets-manifest.json','replacement-report.json','scan-external-resources.js','replace-external-with-local.js'].includes(f));

  // Always ensure index.html and service-worker.js are present
  const assets = new Set();
  assets.add('/');
  assets.add('/index.html');
  assets.add('/service-worker.js');

  for (const f of filtered) {
    // skip hidden files
    if (f.split(path.sep).some(seg => seg.startsWith('.'))) continue;
    assets.add(toWebPath(f));
  }

  return Array.from(assets).sort();
}

function writeManifest(assets) {
  const manifest = { generatedAt: new Date().toISOString(), assets };
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`Wrote assets manifest to ${MANIFEST_PATH} (${assets.length} assets)`);
}

function updateServiceWorker(assets) {
  let sw = fs.readFileSync(SW_PATH, 'utf8');

  // New cache name with timestamp to force clients to update
  const newCacheName = `pbh-cache-v${Date.now()}`;
  sw = sw.replace(/const\s+CACHE_NAME\s*=\s*['"][^'"]+['"];?/, `const CACHE_NAME = '${newCacheName}';`);

  const assetsStr = assets.map(a => `  '${a.replace(/'/g, "\\'")}'`).join(',\n');
  const newAssetsBlock = `const ASSETS_TO_CACHE = [\n${assetsStr}\n];`;

  sw = sw.replace(/const\s+ASSETS_TO_CACHE\s*=\s*\[[\s\S]*?\];/, newAssetsBlock);

  fs.writeFileSync(SW_PATH, sw, 'utf8');
  console.log(`Updated ${SW_PATH} with ${assets.length} assets and cache name ${newCacheName}`);
}

function main() {
  if (!fs.existsSync(SW_PATH)) {
    console.error('service-worker.js not found at', SW_PATH);
    process.exit(1);
  }

  const assets = generateAssetsList();
  writeManifest(assets);
  updateServiceWorker(assets);
}

main();
