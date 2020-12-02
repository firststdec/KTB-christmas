// -------------------------------------
//  Images
// -------------------------------------
const config = require('../config.js');
const { src, dest, task } = require('gulp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

function image() {
  return src(`${config.src.image}**/*.{gif,jpg,jpeg,png,svg}`)
    .pipe(cache(
      imagemin([
        imagemin.gifsicle({
          interlaced: true
        }),
        imagemin.mozjpeg({
          quality: 75,
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 5
        }),
        imagemin.svgo({
          plugins: [{
              removeViewBox: true
            },
            {
              cleanupIDs: false
            }
          ]
        })
      ])
    ))
    .pipe(dest(`${config[process.env.NODE_ENV].root}${config.dist.image}`));
}

task(image);

module.exports = image;
