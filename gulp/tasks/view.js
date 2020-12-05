// -------------------------------------
//  View
// -------------------------------------
const { src, dest, task } = require('gulp')
const pug = require('gulp-pug')
const plumber = require('gulp-plumber-notifier')
const lec = require('gulp-line-ending-corrector')
const browserSync = require('browser-sync')
const config = require('../config.js')

function view() {
  return src(`${config.src.view}pages/**/!(_)*.pug`)
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(
      lec({
        encoding: config.format.encode,
        eolc: config.format.eol,
      })
    )
    .pipe(dest(`${config[process.env.NODE_ENV].root}${config.dist.view}`))
    .pipe(browserSync.stream())
}

task(view)

module.exports = view
