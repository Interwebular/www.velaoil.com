var gulp = require("gulp"),
	util = require("gulp-util"),
	sass = require("gulp-sass"),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	log = util.log;


gulp.task('default', ['sass' , 'js' , 'watch'] , function(){});

gulp.task('sass',function(){

	log("Generating CSS");

	gulp.src('./resources/stylesheets/app.scss')
		.pipe( sass({ style: 'expanded' }) )
		.pipe( autoprefixer() )
		.pipe( minifycss() )
		.pipe( gulp.dest('./build/css') );
});

gulp.task('js', function(){

	log("Generating JS");

	gulp.src('./resources/javascripts/app.js')
		.pipe( uglify() )
		.pipe( gulp.dest('./build/js') );

});

gulp.task("watch", function(){

	log("Watching for changes");

	gulp.watch('./resources/stylesheets/**/*.scss'  , ["sass"]);
	gulp.watch('./resources/javascripts/app.js'  , ["js"]);

});
