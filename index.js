'use strict';

var path = require('path');
var isValid = require('is-valid-app');
var src = path.resolve.bind(path, __dirname, 'templates');

module.exports = function(app) {
  // return if the generator is already registered
  if (!isValid(app, 'generate-editorconfig')) return;

  /**
   * Generate a `.editorconfig` file to the current working directory.
   *
   * ```sh
   * $ gen editorconfig
   * ```
   * @name editorconfig
   * @api public
   */

  app.task('editorconfig', function(cb) {
    var dest = app.option('dest') || app.cwd;

    app.template(src('_editorconfig'));
    return app.toStream('templates')
      .pipe(app.conflicts(dest))
      .pipe(app.dest(dest));
  });

  app.task('default', ['editorconfig']);
};
