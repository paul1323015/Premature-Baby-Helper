const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');
const timestampPattern = /(\.\/js\/app\.bundle\.js\?v=)\d+(?=["'])/g;
const matches = [...indexHtml.matchAll(timestampPattern)];

if (matches.length !== 1) {
  throw new Error(`Expected exactly one app bundle timestamp in index.html, found ${matches.length}.`);
}

const now = new Date();
const timestamp = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, '0'),
  String(now.getDate()).padStart(2, '0'),
  String(now.getHours()).padStart(2, '0'),
  String(now.getMinutes()).padStart(2, '0'),
  String(now.getSeconds()).padStart(2, '0')
].join('');
const updatedHtml = indexHtml.replace(timestampPattern, `$1${timestamp}`);

fs.writeFileSync(indexPath, updatedHtml);
console.log(`Updated app bundle timestamp to ${timestamp}.`);
