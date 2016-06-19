var gulp = require('gulp');
var umd = require('gulp-umd');

gulp.task('umd', function() {
  return gulp.src('dist/playcanvas.js')
    .pipe(umd({
        exports: function(file) {
            return 'pc';
        },
        namespace: function(file) {
            return 'pc';
        }
    }))
    .pipe(gulp.dest('lib'));
});