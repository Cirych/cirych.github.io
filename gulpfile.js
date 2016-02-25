var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var jsbundle = [
    //'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
];
var jscopy = [
    'node_modules/es6-shim/es6-shim.min.js'
];
var cssbundle = [
    'css/style.css'
];

gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('js2bundle', function() {
    return gulp.src(jsbundle)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('app'))
        .pipe(rename('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app'));
});
gulp.task('js2dest', function() {
    return gulp.src(jscopy)
        .pipe(gulp.dest('app'));
});
gulp.task('css2bundle', function() {
    return gulp.src(cssbundle)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('app'));
});

gulp.task('default', ['js2dest', 'js2bundle', 'css2bundle']);