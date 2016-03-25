// Gulp
var gulp = require('gulp');
gulp.task('default', function () { console.log('Yo dude') });
// Plugins
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var watch  = require('gulp-watch');

gulp.task('sass', function () {
  return gulp.src([
              'scss/_variables.scss',
              'scss/_typography.scss',
              'scss/_global.scss'
          ])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
  gulp.watch([
              'scss/_variables.scss',
              'scss/_typography.scss',
              'scss/_global.scss'
          ], ['sass']);
});

// Default Task
gulp.task('default', ['sass']);

// concatenate / copy scss
// gulp.task('styles', function() {
//     watch('scss/*.*', function () {
//         // Shopify scss can't do @import, so here's a task that kinda does the same thing
//         // ...and we want to specify the order
//         gulp.src([
//             'scss/_variables.scss',
//             'scss/_typography.scss',
//             'scss/_global.scss'
//         ])
//             .pipe(sass().on('error', sass.logError))
//             .pipe(concat('style.css'))
//             .pipe(gulp.dest('css'));
//     });
// });
