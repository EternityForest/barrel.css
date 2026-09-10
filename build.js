const postcss = require('postcss');
const cssnano = require('cssnano');
const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
fs.mkdirSync('dist', { recursive: true });
fs.mkdirSync('dist/themes', { recursive: true });

// Build barrel.css
const source = fs.readFileSync('src/barrel.css', 'utf8');

async function build() {
  // Minify barrel.css
  const result = await postcss([cssnano({ preset: 'default' })]).process(source, { from: undefined });
  fs.writeFileSync('dist/barrel.min.css', result.css);
  console.log('barrel.min.css: ' + result.css.length + ' bytes');

  // Regular barrel.css
  const regular = await postcss([]).process(source, { from: undefined });
  fs.writeFileSync('dist/barrel.css', regular.css);
  console.log('barrel.css: ' + regular.css.length + ' bytes');

  // Copy themes directory
  copyDir('themes', 'dist/themes');
  console.log('Copied themes/ to dist/themes');

  // Find and minify all CSS files in themes
  const themeFiles = findCssFiles('themes');
  for (const file of themeFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const result = await postcss([cssnano({ preset: 'default' })]).process(content, { from: undefined });
    const relativePath = path.relative('themes', file);
    const minPath = path.join('dist/themes', relativePath.replace('.css', '.min.css'));
    fs.mkdirSync(path.dirname(minPath), { recursive: true });
    fs.writeFileSync(minPath, result.css);
    console.log(`Minified themes/${relativePath} -> themes/${relativePath.replace('.css', '.min.css')}`);
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function findCssFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findCssFiles(fullPath, files);
    } else if (entry.name.endsWith('.css')) {
      files.push(fullPath);
    }
  }
  return files;
}

build().catch(console.error);
