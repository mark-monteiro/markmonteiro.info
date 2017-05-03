const gulp = require('gulp');
const child = require('child_process');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();

const siteRoot = '_site';

// Jekyll Build
gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// BrowserSync static server
gulp.task('browsersync', function() {
  browserSync.init({
    server: {
      baseDir: siteRoot
    },
    files: [siteRoot + '/**']
  });
});

gulp.task('default', ['jekyll', 'browsersync']);