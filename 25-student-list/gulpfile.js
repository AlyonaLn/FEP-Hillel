const { src, dest, series, parallel, watch } = require("gulp");
const concat = require ('gulp-concat');
const clean = require ('gulp-clean');
const copy = require('gulp-copy');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const config = require('./gulp/config.js');


function cleanDistTask(){
    return src('./dist', {read: false}).pipe(clean());
  }

function appJsTask() {
    return src([
      './src/*.js',      
    ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('./dist'))

  }
  function appCssTask() {
    return src('src/*.css')
    .pipe(concat('all.css'))
    .pipe(dest('./dist'));

  }

  function copyHtml(){
    return src('./src/*.html').pipe(copy('./dist', {prefix: 1}));
  }

  function serve () {
    browserSync.init({
        server:{
            baseDir: './dist'
        }
    });

    watch(['./src/**/*.js'], series(appJsTask, reloadBrowser));
    watch(['./src/**/*.css'], series(appCssTask, reloadBrowser));

  };

  function reloadBrowser(){
    browserSync.reload();
  }

  function buildTask (){
      return series(
          cleanDistTask, 
          parallel(
              appJsTask, 
              appCssTask, 
              copyHtml));

  };
  
  module.exports = {
    build: buildTask(),
    serve: series (buildTask(), serve),

  }