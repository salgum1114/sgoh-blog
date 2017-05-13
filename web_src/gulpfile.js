'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var less = require('gulp-less');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');

var del = require('del');
var merge2 = require('merge2');
var multiDest = require('gulp-multi-dest')

var webpackConfig = require('./webpack.prod.config.js');

var paths = {
	bundle: '../src/main/webapp/js/*.*',
	css: '../src/main/webapp/styles/*.*',
	html: '../src/main/webapp/views/*.*'
}

// bundle clean
gulp.task('clean', function() {
    return del(paths.bundle, {force: true});
});

gulp.task('clean.css', function() {
	return del(paths.css, {force: true});
})

gulp.task('clean.html', function() {
	return del(paths.html, {force: true});
})

// bundle build
gulp.task('build', ['clean', 'clean.css', 'clean.html'], function() {
	var rename = require('gulp-rename');
	return merge2(
		gulp.src('./src/index.js')
			.pipe(webpack(webpackConfig))
			// .pipe(uglify())
			.pipe(rename({extname: '.min.js'}))
			.pipe(gulp.dest('../src/main/webapp/js/')),
		gulp.src('./src/index.html')
			.pipe(gulp.dest('../src/main/webapp/views/')),
		gulp.src('./less/common.less')
			.pipe(less())
			// .pipe(uglifycss())
			.pipe(rename({extname: '.min.css'}))
			.pipe(gulp.dest('../src/main/webapp/styles/'))
	);
});

gulp.task('default', ['build']);