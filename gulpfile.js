var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var livereload = require("gulp-livereload");

//Compile all scss files in scss dir, send to destination folder (css/)
gulp.task("sassify", function(){
  gulp.src("scss/brykng.scss")
    .pipe(sass({
      includePath: [
       'node_modules/kingcss/css'
      ]
    })
    .on("error", sass.logError))
    .pipe(concat("style.css"))
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(rename({
      basename: "brykng",
      extname: ".min.css"
    }))
    .pipe(gulp.dest("./css/"))
    .pipe(livereload())
});

//Gulp watch task
gulp.task("default", function(){
  livereload.listen();
  gulp.watch("scss/**/*.scss", ["sassify"]);
});
