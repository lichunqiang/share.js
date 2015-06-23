'use strict'

var gulp = require('gulp'),
	umd = require('gulp-umd'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');



gulp.task('default', function(cb) {
    return gulp.src('src/*.js')
      .pipe(concat('share.js'))
      .pipe(umd())
      .pipe(gulp.dest('dist'))
      .pipe(uglify())
      .pipe(rename('share.min.js'))
      .pipe(gulp.dest('dist'));;
});
