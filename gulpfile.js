var  gulp = require("gulp");
var  minifyHtml = require("gulp-minify-html");
var cleanCss = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task('htmltask',function(){
	gulp.src('*.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('die'))
});
gulp.task('csstask',function(){
	gulp.src('./css/*.css')
	.pipe(cleanCss())
	.pipe(gulp.dest('./die/css'))
});
gulp.task('jstask',function(){
	gulp.src('./js/*.js')
	.pipe(uglify())
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./die/js'))
});
