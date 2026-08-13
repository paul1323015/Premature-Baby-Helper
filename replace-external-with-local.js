const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname);
const EXTERNAL_REPORT = path.join(ROOT, 'external-resources.json');
const REPORT_OUT = path.join(ROOT, 'replacement-report.json');

const TARGET_EXT = ['.html', '.js', '.css', '.jsx', '.ts', '.tsx'];
const IGNORE_DIRS = new Set(['node_modules', '.git', '.vs', 'dist', 'external']);

function walk(dir) {
  let results = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (IGNORE_DIRS.has(item)) continue;
      results = results.concat(walk(full));
    } else if (stat.isFile()) {
      if (TARGET_EXT.includes(path.extname(item))) results.push(full);
    }
  }
  return results;
}

function loadMappings() {
  if (!fs.existsSync(EXTERNAL_REPORT)) {
    console.error('external-resources.json not found');
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(EXTERNAL_REPORT, 'utf8'));
  const entries = data.entries || [];
  const map = new Map();
  for (const e of entries) {
    if (e.localPath && e.url) {
      // normalize url: remove trailing slash variants
      const key = e.url.replace(/\/$/, '');
      const val = e.localPath;
      map.set(key, val);
    }
  }
  return map;
}

function replaceInFile(file, mappings) {
  let content = fs.readFileSync(file, 'utf8');
  let replaced = 0;
  for (const [url, local] of mappings) {
    // replace exact occurrences with and without trailing slash
    const variants = new Set([url, url + '/', url.replace(/\/$/, '')]);
    for (const v of variants) {
      if (content.includes(v)) {
        const escaped = v.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');
        const re = new RegExp(escaped, 'g');
        const countBefore = (content.match(re) || []).length;
        content = content.replace(re, local);
        replaced += countBefore;
      }
    }
  }
  if (replaced > 0) {
    // backup
    const bak = file + '.bak';
    if (!fs.existsSync(bak)) fs.writeFileSync(bak, fs.readFileSync(file));
    fs.writeFileSync(file, content, 'utf8');
  }
  return replaced;
}

function main() {
  const mappings = loadMappings();
  if (mappings.size === 0) {
    console.log('No mappings with localPath found in external-resources.json');
    process.exit(0);
  }
  const files = walk(ROOT);
  const report = { generatedAt: new Date().toISOString(), replacements: [] };
  let total = 0;
  for (const file of files) {
    const count = replaceInFile(file, mappings);
    if (count > 0) {
      report.replacements.push({ file: '/' + path.relative(ROOT, file).split(path.sep).join('/'), replaced: count });
      total += count;
    }
  }
  report.totalReplacements = total;
  fs.writeFileSync(REPORT_OUT, JSON.stringify(report, null, 2), 'utf8');
  console.log(`Completed replacements: ${total} occurrences updated across ${report.replacements.length} files. Report: ${REPORT_OUT}`);
}

main();
