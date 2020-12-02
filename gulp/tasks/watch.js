// -------------------------------------
//  Watch
// -------------------------------------
const config = require('../config.js');
const { watch } = require('gulp');
const style = require('./style.js');
const view = require('./view.js');
const image = require('./image.js');
const file = require('./file.js');

function watcher(done) {
  watch(`${config.src.style}**/*.scss`).on('change', style);
  watch(`${config.src.view}**/*.pug`).on('change', view);
  watch(`${config.src.image}**/*.{gif,jpg,jpeg,png,svg}`, image);
  watch(`${config.src.file}**/*.json`, file);
}

module.exports = watcher;
