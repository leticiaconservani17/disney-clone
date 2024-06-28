const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/styles/'));
}

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/images/'));
}


exports.default =   function() {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(styles));
    gulp.watch('./src/images/**/*', { ignoreInitial: false }, gulp.series(images));
}