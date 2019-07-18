#!/usr/bin/env node

const { copyFile }  = require(`fs`).promises;
const createSpinner = require(`ora`);
const path          = require(`path`);

const backupConfigDir = `C:/Users/dwhie/Coding`;
const atomConfigDir   = `C:/Users/dwhie/.atom`;

const [,, procedure] = process.argv;

if (!procedure) {
  throw new Error(`Specify a procedure: "backup" or "restore"`);
}

const filenames = [
  `config.cson`,
  `github.cson`,
  `keymap.cson`,
  `snippets.cson`,
];

function backupFile(filename) {
  return copyFile(path.join(atomConfigDir, filename), path.join(backupConfigDir, filename));
}

function restoreFile(filename) {
  return copyFile(path.join(backupConfigDir, filename), path.join(atomConfigDir, filename));
}

async function backup() {

  const spinner = createSpinner(`Backing up files`).start();

  try {
    await Promise.all(filenames.map(backupFile));
  } catch (e) {
    return spinner.fail(e.message);
  }

  spinner.succeed(`Files backed up successfully`);

}

async function restore() {

  const spinner = createSpinner(`Restoring files`).start();

  try {
    await Promise.all(filenames.map(restoreFile));
  } catch (e) {
    return spinner.fail(e.message);
  }

  spinner.succeed(`Files restored successfully`);

}

const procedures = {
  backup,
  restore,
};

const runProcedure = procedures[procedure];

runProcedure()
.catch(console.error);
