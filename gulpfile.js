'use strict'

const dev = true

const gulp = require('gulp')
const wait = require('gulp-wait')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const webpackStream = require('webpack-stream')
const rimraf = require('rimraf') // eslint-disable-line
const rigger = require('gulp-rigger')

const webpackConfig = require('./webpack.config')

gulp.task('serve', ['build-style', 'build-html', 'build-js', 'build-img', 'build-fonts'], function () {
  browserSync.init({
    server: {baseDir: 'build/'},
    open: false,
    reloadOnRestart: true
  })

  gulp.watch('src/html/**/*.html', ['build-html'])
  gulp.watch('src/**/*.scss', ['build-style'])
  gulp.watch('src/**/*.js', ['build-js'])
  gulp.watch('src/**/*.jsx', ['build-js'])
  gulp.watch('src/img/**/*.*', ['build-img'])
  gulp.watch('src/fonts/**/*.*', ['build-fonts'])
  gulp.watch('src/data/**/*.*', ['copy-data'])
  // gulp.watch('src/**/*.*').on('change', browserSync.reload); // reload from any changes
})

gulp.task('build-html', () => {
  return gulp.src('src/html/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.stream())
})

gulp.task('build-style', () => {
  return gulp.src('src/styles/main.scss')
    .pipe(dev ? sourcemaps.init() : wait(0))
    .pipe(wait(300))
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(dev ? sourcemaps.write() : wait(0))
    .pipe(gulp.dest('build/styles/'))
    .pipe(wait(100))
    .pipe(browserSync.stream())
})

gulp.task('build-js', () => {
  return gulp.src('src/scripts/*.*')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.stream())
})

gulp.task('build-img', () => {
  return gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('build/img/'))
    .pipe(browserSync.stream())
})

gulp.task('build-fonts', () => {
  return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts/'))
    .pipe(browserSync.stream())
})

gulp.task('default', ['serve'])
