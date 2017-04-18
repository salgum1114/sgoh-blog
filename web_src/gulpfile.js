'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');

var del = require('del');
var merge2 = require('merge2');
var runSequence = require('run-sequence');

var webpackConfig_report = require('./report/webpack.config.js');
var webpackConfig_workflow = require('./workflow/webpack.config.js');
var webpackConfig_workflow_designer = require('./workflow/designer/webpack.config.js');

var paths = {
    entries: {
		report: './report/app.js'
	},
    dist: '../webapps/ROOT/station/scripts'
};

// app build
gulp.task('clean.report', function() {
    return del('../webapps/ROOT/station/report/*.*', {force: true});
});

gulp.task('build.report', ['clean.report'], function() {
    var rename = require('gulp-rename');
    return merge2(
		gulp.src('./report/app.js')
			/*
			.pipe(webpack({
				entry: paths.entries,
				output: {
					filename: 'app.js'//'[name].js'
				},
				module: {
					loaders: [
						{
							test: /\.js$/,
							exclude: /node_modules/,
							loader: 'babel-loader',
							query: {
								presets: ["react", "es2015"],
								cacheDirectory: true
							}
						}
					]
				}
			}))
			*/
			.pipe(webpack(webpackConfig_report))
			.pipe(uglify())
			.pipe(rename({extname: '.min.js'}))
			.pipe(gulp.dest('../webapps/ROOT/station/report')),
		gulp.src('./report/index.html')
            .pipe(gulp.dest('../webapps/ROOT/station/report'))
	);
});

// workflow
gulp.task('clean.wf', function() {
    return del('../webapps/ROOT/station/workflow/*.*', {force: true});
});

gulp.task('build.wf', ['clean.wf'], function() {
	var rename = require('gulp-rename');
	return merge2(
		gulp.src('./workflow/app.js')
			.pipe(webpack(webpackConfig_workflow))
			.pipe(uglify())
			.pipe(rename({extname: '.min.js'}))
			.pipe(gulp.dest('../webapps/ROOT/station/workflow')),
		gulp.src('./workflow/index.html')
			.pipe(gulp.dest('../webapps/ROOT/station/workflow'))
	);
});

// workflow designer
gulp.task('clean.wfd', function() {
    return del('../webapps/ROOT/station/workflow/designer/*.*', {force: true});
});

gulp.task('build.wfd', ['clean.wfd'], function() {
	var rename = require('gulp-rename');
	return merge2(
		gulp.src('./workflow/designer/app.js')
			.pipe(webpack(webpackConfig_workflow_designer))
//			.pipe(uglify())
			.pipe(rename({extname: '.min.js'}))
			.pipe(gulp.dest('../webapps/ROOT/station/workflow/designer')),
		gulp.src('./workflow/designer/index.html')
			.pipe(gulp.dest('../webapps/ROOT/station/workflow/designer'))
	);
});

// workflow - all
gulp.task('build.workflow', ['build.wf', 'build.wfd']);

// workflow - watch
gulp.task('watch.wf', function() {
	gulp.watch(['workflow/**/*.js', '!workflow/designer/**/*.js'], ['build.wf']);
});

gulp.task('watch.wfd', function() {
	gulp.watch(['workflow/designer/**/*.js'], ['build.wfd']);
});

// watch
gulp.task('watch', function() {
	//gulp.watch(['examples/**/*.js', '!examples/js/*.js'], ['example']);
	gulp.watch(['common/**/*.js', 'report/**/*.js', 'workflow/**/*.js'], ['build.report', 'build.workflow']);
});

gulp.task('default', ['build.report', 'build.workflow']);