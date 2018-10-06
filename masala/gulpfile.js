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
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
    gulp.watch(config.SASS_TARGET, ['sass']);
});
