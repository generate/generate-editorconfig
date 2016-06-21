'use strict';

var path = require('path');
var isValid = require('is-valid-app');
var src = path.resolve.bind(path, __dirname, 'templates');

module.exports = function(app, base) {
  if (!isValid(app, 'generate-editorconfig')) return;
  var dest = app.options.dest || app.cwd;

  app.task('editorconfig', function(cb) {
    app.engine('*', require('engine-base'));
    return app.src(src('_editorconfig'))
      .pipe(app.renderFile('*'))
      .pipe(app.conflicts(dest))
      .pipe(app.dest(function(file) {
        file.basename = '.editorconfig';
        return dest;
      }))
  });

  app.task('default', ['editorconfig']);
};
