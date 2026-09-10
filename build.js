const postcss = require('postcss');
const cssnano = require('cssnano');
const fs = require('fs');
const path = require('path');

async function build() {
  // Ensure dist directory exists
  fs.mkdirSync('dist', { recursive: true });
  fs.mkdirSync('dist/themes', { recursive: true });

  // Remove any old barrel.css and barrel.min.css
  const oldFile = path.join('dist', 'barrel.css');
  const oldMin = path.join('dist', 'barrel.min.css');
  if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);
  if (fs.existsSync(oldMin)) fs.unlinkSync(oldMin);

  // Build barrel.css
  const source = fs.readFileSync('src/barrel.css', 'utf8');
  const result = await postcss([cssnano({ preset: 'default' })]).process(source, { from: undefined });
  fs.writeFileSync('dist/barrel.min.css', result.css);
  console.log('barrel.min.css: ' + result.css.length + ' bytes');

  // First: minify all theme CSS files
  const themeFiles = findCssFiles('themes');
  for (const file of themeFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const minResult = await postcss([cssnano({ preset: 'default' })]).process(content, { from: undefined });
    const relativePath = path.relative('themes', file);
    const minPath = path.join('dist/themes', relativePath.replace('.css', '.min.css'));
    fs.mkdirSync(path.dirname(minPath), { recursive: true });
    fs.writeFileSync(minPath, minResult.css);
    console.log(`Minified themes/${relativePath}`);
  }

  // Second: copy non-CSS assets (fonts, images)
  copyNonCss('themes', 'dist/themes');
  console.log('Copied theme assets to dist/themes');

  // Third: remove unminified .css files from dist/themes (keep only .min.css)
  const distCssFiles = findCssFiles('dist/themes');
  for (const file of distCssFiles) {
    if (!file.endsWith('.min.css')) {
      fs.unlinkSync(file);
      console.log(`Removed unminified: ${path.relative('dist', file)}`);
    }
  }
}

function copyNonCss(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    // Skip all .css files
    if (entry.name.endsWith('.css')) {
      continue;
    }
    if (entry.isDirectory()) {
      copyNonCss(srcPath, destPath);
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
