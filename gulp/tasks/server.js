// -------------------------------------
//  Sever
// -------------------------------------
const config = require('../config.js');
const { task } = require('gulp');
const browserSync = require('browser-sync');

const server = (done) => {
  browserSync({
    server: config[process.env.NODE_ENV].root,
    port: 3000,
    directory: false,
    ghostMode: false,
    open: true,
    watchOptions: {
      ignoreInitial: true,
      ignored: ['node_modules'],
      awaitWriteFinish: true,
    },
  });
  done();
};

task(server);

module.exports = server;
