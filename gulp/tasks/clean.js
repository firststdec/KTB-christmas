// -------------------------------------
//  Clean
// -------------------------------------
const { task } = require('gulp')
const rimraf = require('rimraf')
const config = require('../config.js')

function clean(done) {
  rimraf(config[process.env.NODE_ENV].root, done)
}

task(clean)

module.exports = clean
