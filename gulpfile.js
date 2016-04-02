'use strict';

var gulp = require('gulp');
var rigger = require('gulp-rigger');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var spritesmith = require('gulp.spritesmith');
var watch= require('gulp-watch');
var open = require('gulp-open');

var path = {
	src: {
		html: 'src/index.html',
		scss: 'src/main.scss',
		sprites: 'src/sprites/*.png',
		styles: 'src/styles/',
		img: 'src/images/*.*',
		root: 'src/'
	},
	build: {
		html: 'build/index.html',
		img: 'build/images/',
		root: 'build/'
	},
	watch: {
		html: 'src/**/*.html',
		scss: 'src/style/**/*.scss'
	},
};

gulp.task('default', ['html', 'css', 'img', 'open', 'watch']);

gulp.task('html', function () {
	gulp.src(path.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.root));
});

gulp.task('css', ['spr'], function() {
	gulp.src(path.src.scss)
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer({
			browsers: 'last 2 versions, ie 8-11'
		})]))
		.pipe(gulp.dest(path.build.root));
});

gulp.task('spr', function() {
	var spriteData = 
		gulp.src(path.src.sprites) 
			.pipe(spritesmith({
				imgName: 'sprite.png',
				cssName: 'sprite.scss',
				cssFormat: 'scss',
				algorithm: 'top-down',
				cssVarMap: function (sprite) {sprite.name = 'sprite_' + sprite.name;}
			}));
	spriteData.img.pipe(gulp.dest(path.build.root)); 
	spriteData.css.pipe(gulp.dest(path.src.styles)); 
});

gulp.task('img', function() {
	gulp.src(path.src.img)
		.pipe(gulp.dest(path.build.img));
});

gulp.task('watch', function() {
	watch([path.watch.html], function(event, cb) {
		gulp.start('html');
	});
	watch([path.watch.scss], function(event, cb) {
		gulp.start('css');
	});
	watch([path.src.sprites], function(event, cb) {
		gulp.start('css');
	});
	watch([path.src.img], function(event, cb) {
		gulp.start('img');
	});
});

gulp.task('open', function(){
	var options = {
		app: 'chrome',
		uri: path.build.html
	};
	gulp.src('').pipe(open(options));
});

