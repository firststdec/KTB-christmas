// -------------------------------------
//  Config
// -------------------------------------
const config = {
  development: {
    root: './.dev/',
  },
  production: {
    root: './build/',
    option: {
      cssOutput: 'expanded',
      imgOptimize: true,
    },
  },
  src: {
    view: 'src/views/',
    style: 'src/styles/',
    script: 'src/scripts/',
    image: 'src/images/',
    file: 'src/files/',
  },
  dist: {
    view: '',
    style: 'assets/css/',
    script: 'assets/js/',
    image: 'assets/image/',
    file: 'assets/file/',
  },
  format: {
    encode: 'utf8',
    eol: 'CRLF',
  },
}

module.exports = config
