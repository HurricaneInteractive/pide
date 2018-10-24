'use strict';
var gulp = require("gulp");
var sass = require("gulp-sass");

var config = {
    SASS_TARGET: './scss/**/*.scss',
    SASS_SETTINGS: {
        outputStyle: 'compressed'
    }
};

gulp.task("sass", function() {
    return gulp.src(config.SASS_TARGET)
        .pipe(sass(config.SASS_SETTINGS).on('error', sass.logError))
        .pipe(gulp.dest('../public/masala'));
});

gulp.task('copy_build', function() {
    gulp.src(['../masala/css/**', '../masala/*.html', '../masala/*.js', '!../masala/node_modules/**'])
        .pipe(gulp.dest('../public/masala'));
});

gulp.task('default', function() {
    gulp.watch(config.SASS_TARGET, ['sass']);
});
