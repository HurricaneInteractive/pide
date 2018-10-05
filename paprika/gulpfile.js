var gulp = require('gulp');

gulp.task('copy_build', function() {
  gulp.src('./public/*')
  .pipe(gulp.dest('../public/paprika'));
});

gulp.task('default', [ 'copy_build' ]);