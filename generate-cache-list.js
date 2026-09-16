const fs = require('fs');
const path = require('path');

// Configuration
const ROOT = path.resolve(__dirname); // project root
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

  // Always ensure index.html is present
  const assets = new Set();
  assets.add('/');
  assets.add('/index.html');

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

function main() {
  const assets = generateAssetsList();
  writeManifest(assets);
}

main();
