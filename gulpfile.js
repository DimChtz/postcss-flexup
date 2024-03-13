var postcss = require('gulp-postcss');
var gulp = require('gulp');
var flexup = require('./index');

gulp.task('buildcss', function () {
  return gulp
    .src('./src/main.css')
    .pipe(
      postcss([ flexup ])
    )
  .pipe(gulp.dest('./dist'));
});
