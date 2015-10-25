var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence')

var defaultTask = function(cb) {
  gulpSequence(
    'clean',
    [
      'bower'
    ],
    ['
      images',
      'svg:sprite'
    ],
    [
      'styles'
    ],
    'watch',
    cb
  )
}

gulp.task('default', defaultTask)
module.exports = defaultTask