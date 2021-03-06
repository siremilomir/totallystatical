var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'] },
  source: config.assetsPath+'sass/screen.scss',
  dest: config.buildPath+'assets/css/',
  base: config.assetsPath+'sass/**/*',
  settings: {
    outputStyle: 'nested',
    includePaths: [
      './node_modules/normalize-scss/sass/',
      './node_modules/susy/sass/',
      './node_modules/breakpoint-sass/stylesheets/'
    ]
  }
}
