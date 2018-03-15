var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');


gulp.task('default', function() {
    return gulp.src('src/css/*.css')
        .pipe(concatCss("css/all.css"))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('minify-css', () => {
    return gulp.src('dist/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css-min/'));
});

gulp.task('default', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('js/all.js'))
        .pipe(gulp.dest('dist/'));
});