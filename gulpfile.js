"use strict";

var gulp = require('gulp');
var rigger = require('gulp-rigger');

gulp.task('default', ['rigger']);

gulp.task('rigger', function () {
	gulp.src('src/index.html')
		.pipe(rigger())
		.pipe(gulp.dest('build/'));
});



