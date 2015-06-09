var gulp = require('gulp'),
    rimraf = require('rimraf');

gulp.task('build', ['modules', 'templates'], function () {

});

gulp.task('modules', ['clean'], function () {

  return gulp.src(['./source/main/modules/**/*'], {
    base: './source/main/modules'
  }).pipe(gulp.dest('./target/modules'));
});

gulp.task('templates', ['clean'], function () {

  return gulp.src(['./source/main/resources/templates/**/*'], {
    base: './source/main/resources/templates'
  }).pipe(gulp.dest('./target/resources/templates'));
});

gulp.task('clean', function (cb) {

  rimraf('./target', cb);
});

gulp.task('default', ['build']);
