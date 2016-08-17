'use strict';

var isValid = require('is-valid-app');

module.exports = function(app) {
  // return if the generator is already registered
  if (!isValid(app, 'generate-editorconfig')) return;

  /**
   * Generates a `.editorconfig` file to the current working directory. You can override
   * the default template by adding a custom template to the `templates` directory in
   * user home, at the following path: `~/templates/_editorconfig`
   *
   * ```sh
   * $ gen editorconfig
   * ```
   * @name editorconfig
   * @api public
   */

  app.task('default', ['editorconfig']);
  app.task('editorconfig', function(cb) {
    return app.src('templates/_editorconfig', { cwd: __dirname })
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(function(file) {
        file.basename = '.editorconfig';
        return app.cwd;
      }))
  });
};
