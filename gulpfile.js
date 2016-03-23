var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	connect = require('gulp-connect');

	gulp.task("connect", function(){
		connect.server({
			//root:'',
			port:8080,
			livereload:true
		});
	});


	gulp.task("minifycss",function(){
		gulp.src('css/*.css').pipe(minifycss()).pipe(gulp.dest('dest/')).pipe(connect.reload());;
	});

	gulp.task('watch',['connect'],function(){
		gulp.watch('css/*.css',['minifycss'],function(){
			console.log("test");
		});
	});

