// -------------------------------------
//  Clean
// -------------------------------------
const config = require('../config.js');
const { task } = require('gulp');
const rimraf = require('rimraf');

function clean(done) {
  rimraf(config[process.env.NODE_ENV].root, done);
}

task(clean);

module.exports = clean;
