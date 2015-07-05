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

gulp.task('clean', function (cb) {

  rimraf('./target', cb);
});

gulp.task('images', ['clean'],  function () {

  return gulp.src(['./source/main/resources/static/images/**/*'], {
    base: './source/main/resources/static/images'
  }).pipe(gulp.dest('./target/resources/static/images'));
});

gulp.task('modules', ['clean'], function () {

  return gulp.src(['./source/main/modules/**/*'], {
    base: './source/main/modules'
  }).pipe(gulp.dest('./target/modules'));
});

gulp.task('scripts', ['clean'],  function() {

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

gulp.task('styles', ['clean'],  function () {

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

gulp.task('templates', ['clean'], function () {

  return gulp.src(['./source/main/resources/templates/**/*'], {
    base: './source/main/resources/templates'
  }).pipe(gulp.dest('./target/resources/templates'));
});

gulp.task('watch', function () {

  watch(['./source/main/resources/static/images/**/*'], function () {
    gulp.start('images');
  });

//   gulp.watch(['./source/main/resources/static/images/*', './source/main/resources/static/images/**/*'], ['images']);
//
//   gulp.watch(['./source/main/resources/static/scripts/*.js', './source/main/resources/static/scripts/**/*.js'], ['scripts']);
//
//   gulp.watch(['./source/main/resources/static/styles/*.less', './source/main/resources/static/styles/**/*.less'], ['styles']);
});

gulp.task('default', ['build']);
