'use strict';
var gulp = require("gulp");
var sass = require("gulp-sass");
var babel = require('gulp-babel');
var rollup = require('gulp-rollup');

var config = {
    SASS_TARGET: './scss/**/*.scss',
    SASS_SETTINGS: {
        outputStyle: 'compressed'
    },
    JS_TARGET: './js/**/*.js'
};

gulp.task("sass", function() {
    return gulp.src(config.SASS_TARGET)
        .pipe(sass(config.SASS_SETTINGS).on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task("js", function() {
  return gulp.src(config.JS_TARGET)
      .pipe(babel({
          presets: ['@babel/env']
      }))
      .pipe(rollup({
        input: './js/script.js',
        output: {
          format: 'es'
        }
      }))
      .pipe(gulp.dest('./'))
});

gulp.task('default', function() {
    gulp.watch(config.SASS_TARGET, ['sass']);
    gulp.watch(config.JS_TARGET, ['js']);
});

gulp.task('copy_build', function() {
  gulp.src(['../masala/css/**', '../masala/*.html', '../masala/*.js', '!../masala/node_modules/**'])
  .pipe(gulp.dest('../public/masala'));
});

// gulp.task('default', [ 'copy_build' ]);
