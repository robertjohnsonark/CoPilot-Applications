"use strict";
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var path = require('path');
var tsProject = ts.createProject("tsconfig.json");

// task to clean all files in lib (which is out folder for containing all javascripts)
gulp.task("clean:lib", function() {
    return del(['lib/**/*']);
});

// task to build(transpile) all typescripts into javascripts in lib folder
gulp.task("tsc", () => {
    tsProject = ts.createProject('tsconfig.json');    
    let tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());
        tsResult.js
        .pipe(sourcemaps.write({
          sourceRoot: function (file) {
            var sourceFile = path.join(file.cwd, file.sourceMap.file);
            return path.relative(path.dirname(sourceFile), file.cwd);
          }
        }))
        .pipe(gulp.dest('lib'));
});

// adding default tasks as clean and build
gulp.task('default', ['clean:lib','tsc'], function () {
});