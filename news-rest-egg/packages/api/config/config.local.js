'use strict'

const fs = require('fs')
const path = require('path')

const PACKAGES_DIR = path.resolve(__dirname, '../..');
const packages = fs
  .readdirSync(PACKAGES_DIR)
  .filter(dir => dir != 'api')
  .map(dir => `../${dir}`)

exports.development = {
  watchDirs: packages
}
