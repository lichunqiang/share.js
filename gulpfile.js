'use strict'

var gulp = require('gulp')
	,umd = require('gulp-umd')
  ,concat = require('gulp-concat')
  ,uglify = require('gulp-uglify')
  ,rename = require('gulp-rename')
  ,header = require('gulp-header')
  ,jshint = require('gulp-jshint')
  ,stylish = require('jshint-stylish');

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

gulp.task('hint', function() {
    return gulp.src('src/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
});

gulp.task('build', function(cb) {
    return gulp.src([
        'src/utils.js',
        'src/platform.js',
        'src/share.js',
        'src/jquery.share.js'
      ])
      .pipe(concat('share.js'))
      .pipe(umd())
      .pipe(header(banner, {pkg: pkg}))
      .pipe(gulp.dest('dist'))
      .pipe(uglify({'preserveComments': 'some'}))
      .pipe(rename('share.min.js'))
      .pipe(gulp.dest('dist'));;
});

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['hint', 'build']);
});

gulp.task('default', ['build']);
