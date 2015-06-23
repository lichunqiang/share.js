'use strict'

var gulp = require('gulp'),
	umd = require('gulp-umd'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');

gulp.task('build', function(cb) {
    return gulp.src([
        'src/utils.js',
        'src/platform.js',
        'src/share.js',
        'src/jquery.share.js'
      ])
      .pipe(concat('share.js'))
      .pipe(umd())
      .pipe(gulp.dest('dist'))
      .pipe(uglify())
      .pipe(rename('share.min.js'))
      .pipe(gulp.dest('dist'));;
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', ['build']);
});

gulp.task('default', ['build']);
