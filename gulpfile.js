var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');

gulp.task('build', function() {
	return gulp.src('./src/app.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('build/'))
		.pipe(connect.reload());
});


gulp.task('run', ['build'], function(){
	connect.server({
	  root: './build',
	  port: 8080,
	  livereload: true
	});
});


gulp.task('watch', ['run'], function() {
	gulp.watch(['./src/**/*'], ['build']);
});

gulp.task('default', ['watch']);