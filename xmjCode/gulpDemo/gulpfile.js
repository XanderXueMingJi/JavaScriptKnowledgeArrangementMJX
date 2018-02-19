const gulp = require("gulp");

var concat = require('gulp-concat');

//获取js中的Js文件并且打包在一起
gulp.task('jsConcat',function(){
    //gulp.src('./*.js')
	gulp.src('./node_modules/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('demo'))
})



gulp.task('default', function() {
	
	console.log('hello xmj');
});



