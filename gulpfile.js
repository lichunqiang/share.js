'use strict'

var gulp = require('gulp'),
	umd = require('gulp-umd'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  header = require('gulp-header');

var banner = [
'/**',
 '* <%= pkg.name %> - <%= pkg.description %>',
 '* @version v<%= pkg.version %>',
 '* @link <%= pkg.homepage %>',
 '* @license <%= pkg.license %>',
 '* @author <%= pkg.author %>',
 '*/'
].join('\n');

var pkg = require('./package.json');



gulp.task('default', function(cb) {
    return gulp.src('src/*.js')
      .pipe(concat('share.js'))
      .pipe(umd())
      .pipe(header(banner, {pkg: pkg}))
      .pipe(gulp.dest('dist'))
      .pipe(uglify({'preserveComments': 'some'}))
      .pipe(rename('share.min.js'))
      .pipe(gulp.dest('dist'));;
});
