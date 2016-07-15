'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var generate = require('generate');
var npm = require('npm-install-global');
var gm = require('global-modules');
var del = require('delete');
var generator = require('./');
var app;

var actual = path.resolve.bind(path, __dirname, 'actual');
function symlink(dir, cb) {
  var src = path.resolve(dir);
  var name = path.basename(src);
  var dest = path.resolve(gm, name);
  fs.stat(dest, function(err, stat) {
    if (err) {
      fs.symlink(src, dest, cb);
    } else {
      cb();
    }
  });
}

function exists(name, cb) {
  return function(err) {
    if (err) return cb(err);
    var filepath = actual(name);
    fs.stat(filepath, function(err, stat) {
      if (err) return cb(err);
      assert(stat);
      cb();
    });
  };
}

describe('generate-editorconfig', function() {
  if (!process.env.CI && !process.env.TRAVIS) {
    before(function(cb) {
      npm.maybeInstall('generate', cb);
    });
  }

  beforeEach(function() {
    app = generate({silent: true});
    app.option('dest', actual());
    app.cwd = actual();
  });

  afterEach(function(cb) {
    del(actual(), cb);
  });

  describe('plugin', function() {
    it('should only register the plugin once', function(cb) {
      var count = 0;
      app.on('plugin', function(name) {
        if (name === 'generate-editorconfig') {
          count++;
        }
      });
      app.use(generator);
      app.use(generator);
      app.use(generator);
      assert.equal(count, 1);
      cb();
    });

    it('should extend tasks onto the instance', function() {
      app.use(generator);
      assert(app.tasks.hasOwnProperty('default'));
      assert(app.tasks.hasOwnProperty('editorconfig'));
    });

    it('should run the `default` task with .build', function(cb) {
      app.use(generator);
      app.build('default', exists('.editorconfig', cb));
    });

    it('should run the `default` task with .generate', function(cb) {
      app.use(generator);
      app.generate('default', exists('.editorconfig', cb));
    });

    it('should run the `editorconfig` task with .build', function(cb) {
      app.use(generator);
      app.build('editorconfig', exists('.editorconfig', cb));
    });

    it('should run the `editorconfig` task with .generate', function(cb) {
      app.use(generator);
      app.generate('editorconfig', exists('.editorconfig', cb));
    });
  });

  if (!process.env.CI && !process.env.TRAVIS) {
    describe('generator (CLI)', function() {
      before(function(cb) {
        symlink(__dirname, cb);
      });

      it('should run the default task using the `generate-editorconfig` name', function(cb) {
        app.use(generator);
        app.generate('generate-editorconfig', exists('.editorconfig', cb));
      });

      it('should run the default task using the `editorconfig` generator alias', function(cb) {
        app.use(generator);
        app.generate('editorconfig', exists('.editorconfig', cb));
      });
    });
  }

  describe('generator (API)', function() {
    it('should run the default task on the generator', function(cb) {
      app.register('editorconfig', generator);
      app.generate('editorconfig', exists('.editorconfig', cb));
    });

    it('should run the `editorconfig` task', function(cb) {
      app.register('editorconfig', generator);
      app.generate('editorconfig:editorconfig', exists('.editorconfig', cb));
    });

    it('should run the `default` task when defined explicitly', function(cb) {
      app.register('editorconfig', generator);
      app.generate('editorconfig:default', exists('.editorconfig', cb));
    });
  });

  describe('sub-generator', function() {
    it('should work as a sub-generator', function(cb) {
      app.register('foo', function(foo) {
        foo.register('editorconfig', generator);
      });
      app.generate('foo.editorconfig', exists('.editorconfig', cb));
    });

    it('should run the `default` task by default', function(cb) {
      app.register('foo', function(foo) {
        foo.register('editorconfig', generator);
      });
      app.generate('foo.editorconfig', exists('.editorconfig', cb));
    });

    it('should run the `editorconfig:default` task when defined explicitly', function(cb) {
      app.register('foo', function(foo) {
        foo.register('editorconfig', generator);
      });
      app.generate('foo.editorconfig:default', exists('.editorconfig', cb));
    });

    it('should run the `editorconfig:editorconfig` task', function(cb) {
      app.register('foo', function(foo) {
        foo.register('editorconfig', generator);
      });
      app.generate('foo.editorconfig:editorconfig', exists('.editorconfig', cb));
    });

    it('should work with nested sub-generators', function(cb) {
      app
        .register('foo', generator)
        .register('bar', generator)
        .register('baz', generator)

      app.generate('foo.bar.baz', exists('.editorconfig', cb));
    });
  });
});
