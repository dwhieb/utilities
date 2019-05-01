#!/usr/bin/env node

const { copyFile } = require(`fs`).promises;

const backupConfigPath = `C:/Users/dwhie/Coding/config.cson`;
const atomConfigPath   = `C:/Users/dwhie/.atom/config.cson`;

const [,,procedure] = process.argv;

if (!procedure) {
  throw new Error(`Specify a procedure: "backup" or "restore"`);
}

async function backup() {
  await copyFile(atomConfigPath, backupConfigPath);
  console.log(`Atom config backed up successfully.`);
}

async function restore() {
  await copyFile(backupConfigPath, atomConfigPath);
  console.log(`Atom config restored successfully.`);
}

const procedures = {
  backup,
  restore,
};

const runProcedure = procedures[procedure];

runProcedure()
.catch(console.error);
