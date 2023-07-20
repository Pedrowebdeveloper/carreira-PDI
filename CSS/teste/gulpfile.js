"use-strict";

const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require("node-sass");//necessario para funcionar o gulp-sass

gulp.task("default", watch)

gulp.task("sass", compilaSass);

function compilaSass() {
    return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))//converte sass para css como gulp-sass ou seja a exec do plugin
    .pipe(gulp.dest("src/css"));
}

function watch() {
    gulp.watch("src/scss/**/*.scss", compilaSass)
}