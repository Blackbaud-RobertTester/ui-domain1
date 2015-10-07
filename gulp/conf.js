var gutil = require('gulp-util');

/**
 *  The main paths of your project handle these with care
 */
//TODO: Should not have to hard code the src path here.  What we really want is the file to be created in the domain1 directory and then copied.
exports.paths = {
    src: 'src/app/domain1',
    dist: 'src/app/domain1/dist',
    tmp: 'src/app/domain1/.tmp'
};

exports.module = {
    exportFileName: 'domain1.js',
    mainModuleFileName: 'main.module.js',
    moduleName: 'uiShell.main',
    key: "domain1"
};