const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const ROOT = path.resolve(__dirname);
const REPORT_PATH = path.join(ROOT, 'external-resources.json');
const DOWNLOAD_DIR = path.join(ROOT, 'external');

const IGNORE_DIRS = new Set(['node_modules', '.git', '.vs', 'dist']);

function walk(dir, base) {
  base = base || '';
  let results = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    const rel = path.join(base, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (IGNORE_DIRS.has(file)) continue;
      results = results.concat(walk(full, rel));
    } else if (stat.isFile()) {
      // consider only text-like files
      if (/\.(js|jsx|ts|tsx|html|css|json|md)$/.test(file)) results.push(rel);
    }
  }
  return results;
}

function findExternalUrls() {
  const files = walk(ROOT, '');
  const urlRegex = /https?:\/\/[^"'\)\s>]+/g;
  const results = [];
  for (const f of files) {
    const full = path.join(ROOT, f);
    const content = fs.readFileSync(full, 'utf8');
    const matches = content.match(urlRegex);
    if (matches) {
      for (const m of matches) results.push({ file: toWebPath(f), url: m });
    }
  }
  return results;
}

function toWebPath(p) {
  return '/' + p.split(path.sep).join('/');
}

function writeReport(entries) {
  fs.writeFileSync(REPORT_PATH, JSON.stringify({ generatedAt: new Date().toISOString(), entries }, null, 2), 'utf8');
  console.log(`Wrote external resources report to ${REPORT_PATH} (${entries.length} occurrences)`);
}

function downloadUrl(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, res => {
      if (res.statusCode !== 200) return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      const dir = path.dirname(destPath);
      fs.mkdirSync(dir, { recursive: true });
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => fileStream.close(() => resolve()));
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  const entries = findExternalUrls();
  writeReport(entries);

  // If --download flag provided, attempt to fetch resources into /external and report replacements
  const args = process.argv.slice(2);
  if (args.includes('--download')) {
    console.log('Downloading external resources into ./external ...');
    for (const e of entries) {
      try {
        const url = e.url;
        // ignore data: URIs
        if (url.startsWith('data:')) continue;
        const urlObj = new URL(url);
        const filename = path.basename(urlObj.pathname) || 'index';
        const hostDir = path.join(DOWNLOAD_DIR, urlObj.hostname);
        const dest = path.join(hostDir, filename);
        await downloadUrl(url, dest);
        console.log(`Downloaded ${url} -> ${dest}`);
        // Note: not replacing references automatically to avoid risking incorrect edits
        e.localPath = toWebPath(path.relative(ROOT, dest));
      } catch (err) {
        console.warn('Failed to download', e.url, err.message);
      }
    }
    // update report with localPath where available
    writeReport(entries);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
