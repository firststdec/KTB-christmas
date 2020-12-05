// -------------------------------------
//  Script
// -------------------------------------
const { src, dest, task } = require('gulp')
const webpack = require('webpack-stream')
const browserSync = require('browser-sync')
const config = require('../config.js')

function script(done) {
  src([`${config.src.script}index.js`])
    .pipe(
      webpack({
        mode: process.env.NODE_ENV,
        devtool: 'source-map',
        watch: true,
        output: {
          filename: '[name].bundle.js',
          chunkFilename: '[name].bundle.js',
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'babel-loader',
                },
                {
                  loader: 'eslint-loader',
                  options: {
                    emitWarning: true,
                  },
                },
              ],
            },
          ],
        },
        performance: {
          hints: false
        }
      })
    )
    .pipe(dest(`${config[process.env.NODE_ENV].root}${config.dist.script}`))
    .pipe(browserSync.stream())
  done()
}

task(script)

module.exports = script
