const { src, dest, series, parallel, watch } = require("gulp");
const concat = require ('gulp-concat');
const clean = require ('gulp-clean');
const copy = require('gulp-copy');
const uglify = require('gulp-uglify');



function cleanDistTask(){
  return src('./dist', {read: false}).pipe(clean());
}

function copyHtml(){
  return src('./src/*.html').pipe(copy('./dist', {prefix: 1}));
}

function appJsTask() {
    return src([
      './src/*.js',      
    ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('./dist'));

  }
  
  function appCssTask() {
    return src('src/*.css')
    .pipe(concat('all.css'))
    .pipe(dest('./dist'));

  }

  function watchFiles () {
    return watch(['./src/**/*.js'], {ignoreInitial: false}, () => appJsTask());
  }
  
  module.exports = {
    build: series(cleanDistTask, parallel(appJsTask, appCssTask, copyHtml)),
    serve: series(cleanDistTask, parallel(appJsTask, appCssTask, copyHtml), watchFiles),
  }