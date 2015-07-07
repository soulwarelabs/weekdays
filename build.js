var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    less = require('gulp-less'),
    rimraf = require('rimraf'),
    LessPluginAutoprefix = require('less-plugin-autoprefix'),
    LessPluginClean = require('less-plugin-clean-css');

gulp.task('build', ['images', 'modules', 'scripts', 'styles', 'templates'], function () {

});

gulp.task('clean-images', function (cb) {

  rimraf('./target/resources/static/images', cb);
});

gulp.task('clean-modules', function (cb) {

  rimraf('./target/modules', cb);
});

gulp.task('clean-scripts', function (cb) {

  rimraf('./target/resources/static/scripts', cb);
});

gulp.task('clean-styles', function (cb) {

  rimraf('./target/resources/static/styles', cb);
});

gulp.task('clean-templates', function (cb) {

  rimraf('./target/resources/templates', cb);
});

gulp.task('images', ['clean-images'],  function () {

  return gulp.src(['./source/main/resources/static/images/**/*'], {
    base: './source/main/resources/static/images'
  }).pipe(gulp.dest('./target/resources/static/images'));
});

gulp.task('modules', ['clean-modules'], function () {

  return gulp.src(['./source/main/modules/**/*'], {
    base: './source/main/modules'
  }).pipe(gulp.dest('./target/modules'));
});

gulp.task('scripts', ['clean-scripts'],  function() {

  return gulp.src(['./source/main/resources/static/scripts/application.js'])
      .pipe(browserify({
        options: {
          browserifyOptions: {
           debug: true
          }
        }
      }))
      .pipe(concat('bundle.js'))
      .pipe(ngAnnotate())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./target/resources/static/scripts'));
});

gulp.task('styles', ['clean-styles'],  function () {

  autoprefix = new LessPluginAutoprefix({
    browsers: ["last 2 versions"]
  });

  clean = new LessPluginClean({
    advanced: true
  });

  return gulp.src(['./source/main/resources/static/styles/bundle.less'])
      .pipe(less({
        plugins: [autoprefix, clean]
      }))
      .pipe(gulp.dest('./target/resources/static/styles'));
});

gulp.task('templates', ['clean-templates'], function () {

  return gulp.src(['./source/main/resources/templates/**/*'], {
    base: './source/main/resources/templates'
  }).pipe(gulp.dest('./target/resources/templates'));
});

gulp.task('watch', function () {

  watch(['./source/main/resources/static/images/**/*'], function () {
    gulp.start('images');
  });

  watch(['./source/main/resources/static/scripts/**/*'], function () {
    gulp.start('scripts');
  });

  watch(['./source/main/resources/static/styles/**/*'], function () {
    gulp.start('styles');
  });

  watch(['./source/main/resources/templates/**/*'], function () {
    gulp.start('templates');
  });
});

gulp.task('default', ['build']);
