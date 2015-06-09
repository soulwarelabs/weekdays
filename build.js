var gulp = require('gulp'),
    rimraf = require('rimraf');

gulp.task('build', ['clean'], function () {

  return gulp.src(['./source/main/modules/**/*'], {
    base: './source/main/modules'
  }).pipe(gulp.dest('./target/modules'));
});

gulp.task('clean', function (cb) {

  rimraf('./target', cb);
});

gulp.task('default', ['build']);
