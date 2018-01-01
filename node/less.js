/* eslint-disable
  func-style,
  no-console,
  no-extra-parens,
  no-shadow,
  no-use-before-define,
  require-jsdoc
 */

const fs   = require('fs');
const less = require('less');

async function convertFile(path) {
  const lessData    = await readFile(path);
  const output      = await less.render(lessData);
  const { css }     = output;
  const regexp      = new RegExp('less', 'g');
  const newPath     = path.replace(regexp, 'css');
  await writeFile(newPath, css);
}

async function convertGeneralLessFiles() {
  const filenames = await readdir('less');
  return filenames.map(filename => `less/${filename}`).map(convertFile);
}

async function convertToolFile(folder) {
  const isDir = await isFolder(folder);
  if (isDir) return convertFile(`tools/${folder}/${folder}.less`);
  return Promise.resolve();
}

async function convertToolsLessFiles() {
  const folders = await readdir('tools');
  return folders.map(convertToolFile);
}

function isFolder(path) {
  return new Promise((resolve, reject) => {
    fs.stat(`tools/${path}`, (err, stats) => {
      if (err) reject(err);
      else if (stats.isDirectory()) resolve(true);
      else resolve(false);
    });
  });
}

function readdir(folder) {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}

function writeFile(path, css) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, css, 'utf8', err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

Promise.all([
  convertGeneralLessFiles(),
  convertToolsLessFiles(),
]).then(() => console.log('Done converting LESS files'))
.catch(console.error);
