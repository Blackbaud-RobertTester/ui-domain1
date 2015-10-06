'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials:domain1', function () {
    return gulp.src([
        path.join(conf.paths.src, '/partials/*.html')
    ])
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.angularTemplatecache('templateCacheHtml-domain1.js', {
            module: 'uiShell.main',
            root: 'app'
        }))
        .pipe(gulp.dest(conf.paths.tmp + '/partials/'));
});

gulp.task('clean:domain1', function () {
    return $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});

gulp.task('build:domain1', ['partials:domain1', 'scripts:domain1']);

