var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

gulp.task('default', function() {
	var bundler = watchify(browserify({
		entries: ['./src/CreateInvoiceApp.js'],
		transform: [["babelify", { "presets": ["es2015", "react"] }]],
		extensions: ['.js'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));

	function build(file) {
		if (file) gutil.log('Recompiling ' + file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('index.js'))
			.pipe(gulp.dest('./public'));
	};
	build()
	bundler.on('update', build)
});
