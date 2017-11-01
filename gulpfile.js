'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
     del = require('del');


gulp.task("concatScripts", function(){
  return gulp.src([
    'src/js/main.js',
    'src/js/main2.js'
  ])
  .pipe(concat("app.js"))
  .pipe(gulp.dest("js"))
});

gulp.task("minifyScripts", ["concatScripts"], function (){
  return gulp.src("js/app.js")
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('js'));
});

gulp.task('compileSass', function(){
  return gulp.src("src/scss/application.scss")
    .pipe(sass())
    .pipe(gulp.dest('css'));
})

gulp.task('watchFiles', function(){
  gulp.watch('src/scss/*.scss', ['compileSass']);
  gulp.watch('src/js/main.js', ['concatScripts']);
  gulp.watch('src/js/main2.js', ['concatScripts']);
})

gulp.task('clean', function() {
  del(['dist', 'css/application.css*', 'js/app*.js*'] );
})

gulp.task("build", ['minifyScripts', 'compileSass'], function (){
  return gulp.src(["css/application.css", "js/app.min.js",
  'index.php', 'img/**', 'fonts/**'], { base: './' })
  .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

gulp.task("default", ['clean'], function(){
  gulp.start('build');
});

gulp.task("default", ['build']);
