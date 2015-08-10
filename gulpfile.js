var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('compile', function() {
    gulp.src('ink.less')
        .pipe(less())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('ink.less', ['compile']);
});

gulp.task('default', ['compile']);
