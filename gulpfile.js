var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// BrowserSync static server
gulp.task('browsersync', function() {
    browserSync.init({
        server: {
            baseDir: "_site"
        }
    });
});