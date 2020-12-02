// -------------------------------------
//  Style
// -------------------------------------
const config = require('../config.js');
const { src, dest, task } = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const plumberNoti = require('gulp-plumber-notifier');
const wait = require('gulp-wait');
const gulpIf = require('gulp-if');
const lec = require('gulp-line-ending-corrector');
const browserSync = require('browser-sync');
const gulpStylelint = require('gulp-stylelint');

function style() {
  return src(`${config.src.style}**/*.scss`)
    .pipe(plumberNoti())
    .pipe(sassGlob())
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
    .pipe(sourcemaps.init())
    .pipe(gulpIf(process.env.NODE_ENV === 'development', sourcemaps.init()))
    .pipe(wait(400))
    .pipe(
      sass({
        outputStyle:
          process.env.NODE_ENV === 'development'
            ? 'expanded'
            : config[process.env.NODE_ENV].option.cssOutput,
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulpIf(process.env.NODE_ENV === 'development', sourcemaps.write('.')))
    .pipe(
      lec({
        encoding: config.format.encode,
        eolc: config.format.eol,
      })
    )
    .pipe(dest(`${config[process.env.NODE_ENV].root}${config.dist.style}`))
    .pipe(browserSync.stream());
}

task(style);

module.exports = style;
