'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');


const settings = {
    autoprefixer: {
        browsers: ['last 2 versions'],
        cascade: false
    }
}

function watchFiles() {
    gulp.watch('./scss/**/*.scss', buildStyles)
};

function buildStyles() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(settings.autoprefixer))
        .pipe(gulp.dest('./dest/css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
};

exports.default = buildStyles;
exports.watch = watchFiles;