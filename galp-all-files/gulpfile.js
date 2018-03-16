var gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
let cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

var uglyfly = require('gulp-uglyfly');
var concat = require('gulp-concat');

var browserSync = require('browser-sync');

gulp.task('default', function() {
    return gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(concatCss("css/all.css"))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename("all.min.css"))
        .pipe(gulp.dest('dist/'));
});

gulp.task('script', function() {
    gulp.src('src/js/*.js')
        .pipe(concat('js/all.js'))
        .pipe(uglyfly())
        .pipe(rename("all.min.js"))
        .pipe(gulp.dest('dist/'))
});

gulp.task('images', () =>
    gulp.src('src/sprites/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/sprites'))
);

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch('src/css/*.css');
});