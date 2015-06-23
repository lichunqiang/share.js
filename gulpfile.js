'use strict'

var gulp = require('gulp'),
	umd = require('gulp-umd');



gulp.task('default', function(cb) {
    return gulp.src('src/*.js')
      .pipe(umd())
      .pipe(gulp.dest('dist'));
});