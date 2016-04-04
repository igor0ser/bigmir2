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
		scss: 'src/**/*.scss'
	},
};

gulp.task('default', ['spr', 'html', 'css', 'img', 'watch'], () => gulp.start('open'));

gulp.task('html', function () {
	return gulp.src(path.src.html)
			.pipe(rigger())
			.pipe(gulp.dest(path.build.root));
});

gulp.task('css', () => {
	return gulp.src(path.src.scss)
			.pipe(sass().on('error', sass.logError))
			.pipe(postcss([autoprefixer({
				browsers: 'last 2 versions, ie 8-11'
			})]))
			.pipe(gulp.dest(path.build.root));
});

gulp.task('spr', () => {
	var spriteData = 
		gulp.src(path.src.sprites) 
			.pipe(spritesmith({
				imgName: 'sprite.png',
				cssName: 'sprite.scss',
				cssFormat: 'scss',
				algorithm: 'top-down',
				padding: 2,
				cssVarMap: function (sprite) {sprite.name = 'sprite_' + sprite.name;}
			}));
	spriteData.img.pipe(gulp.dest(path.build.root)); 
	spriteData.css.pipe(gulp.dest(path.src.styles)); 
	gulp.start('css');
	return spriteData;
});

gulp.task('img', () => {
	return gulp.src(path.src.img)
			.pipe(gulp.dest(path.build.img));
});

gulp.task('watch', () => {
	watch([path.watch.html], function(event, cb) {
		gulp.start('html');
	});
	watch([path.watch.scss], function(event, cb) {
		gulp.start('css');
	});
	watch([path.src.sprites], function(event, cb) {
		gulp.start('spr');
	});
	watch([path.src.img], function(event, cb) {
		gulp.start('img');
	});
});

gulp.task('open', () => {
	var options = {
		app: 'chrome',
		uri: path.build.html
	};
	return gulp.src('').pipe(open(options));
});

