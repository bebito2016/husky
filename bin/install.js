// Run when package is installed
const path = require('path')
const chalk = require('chalk')
const isCI = require('is-ci')
const installFrom = require('../src/install')

console.log(chalk.cyan.underline('husky'))

if (isCI) {
  console.log('CI detected, skipping Git hooks installation')
  process.exit(0)
}

console.log('setting up Git hooks')

const huskyDir = path.join(__dirname, '..')
installFrom(huskyDir)
