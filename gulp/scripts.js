'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var webpack = require('webpack-stream');

var $ = require('gulp-load-plugins')();

function webpackWrapper(watch, test, callback) {
    var webpackOptions = {
        watch: false,
        module: {
            preLoaders: [{test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}],
            loaders: [{test: /\.js$/, exclude: /node_modules/, loaders: ['ng-annotate', 'babel-loader']}]
        },
        output: {filename: conf.module.exportFileName}
    };

    if (watch) {
        webpackOptions.devtool = 'inline-source-map';
    }

    var webpackChangeHandler = function (err, stats) {
        if (err) {
            conf.errorHandler('Webpack')(err);
        }
        $.util.log(stats.toString({
            colors: $.util.colors.supportsColor,
            chunks: false,
            hash: false,
            version: false
        }));

        if (watch) {
            watch = false;
            callback();
        }
    };

    var sources = [path.join(conf.paths.src, 'main.module.js')];

    if (test) {
        sources.push(path.join(conf.paths.src, '/module/**/*.spec.js'));
    }

    return gulp.src(sources)
        .pipe(webpack(webpackOptions, null, webpackChangeHandler))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}

gulp.task('scripts:domain1', function () {
    return webpackWrapper(true, false, function(){});
});
