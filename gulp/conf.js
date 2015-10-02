//var gutil = require('gulp-util');
//
///**
// *  The main paths of your project handle these with care
// */
//exports.paths = {
//    src: 'domain1',
//    dist: 'dist',
//    tmp: '.tmp'
//};
//
//exports.module = {
//    exportFileName: 'domain1.js',
//    mainModuleFileName: 'main.module.js',
//    moduleName: 'uiShell.main'
//}
//
///**
// *  Common implementation for an error handler of a Gulp plugin
// */
//exports.errorHandler = function (title) {
//    'use strict';
//
//    return function (err) {
//        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
//        this.emit('end');
//    };
//};