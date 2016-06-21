# generate-editorconfig [![NPM version](https://img.shields.io/npm/v/generate-editorconfig.svg?style=flat)](https://www.npmjs.com/package/generate-editorconfig) [![NPM downloads](https://img.shields.io/npm/dm/generate-editorconfig.svg?style=flat)](https://npmjs.org/package/generate-editorconfig) [![Build Status](https://img.shields.io/travis/generate/generate-editorconfig.svg?style=flat)](https://travis-ci.org/generate/generate-editorconfig)

Generate a `.editorconfig` file. Use as a sub-generator or plugin in your own generator.

## What is generate?

Generate is a new, open source developer framework for rapidly initializing and scaffolding out new code projects, offering an intuitive CLI, and a powerful and expressive API that makes it easy and enjoyable to use.

Visit the [getting started guide](https://github.com/generate/getting-started) or the [generate](https://github.com/generate/generate) project and documentation to learn more.

## Usage

```js
var editorconfig = require('generate-editorconfig');
```

## API

### [editorconfig](index.js#L23)

Generate a `.editorconfig` file to the current working directory. You can override the default template by adding a custom template at the following path: `~/templates/_editorconfig` (in user home).

**Example**

```sh
$ gen editorconfig
```

## CLI

**Installing the CLI**

To run the `editorconfig` generator from the command line, you'll need to install [generate](https://github.com/generate/generate) globally first. You can do that now with the following command:

```sh
$ npm i -g generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory.

**Help**

Get general help and a menu of available commands:

```sh
$ gen help
```

**Running the `editorconfig` generator**

Once both [generate](https://github.com/generate/generate) and `generate-editorconfig` are installed globally, you can run the generator with the following command:

```sh
$ gen editorconfig
```

If completed successfully, you should see both `starting` and `finished` events in the terminal, like the following:

```sh
[00:44:21] starting ...
...
[00:44:22] finished ✔
```

If you do not see one or both of those events, please [let us know about it](../../issues).

## API

This updater can also be used as a node.js library in your own updater. To do so you must first install generate-editorconfig locally.

**Install**

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save generate-editorconfig
```

**Use as a plugin in your generator**

Use as a plugin if you want to extend your own generator with the features, settings and tasks of generate-editorconfig, as if they were created on your generator.

In your `generator.js`:

```js
module.exports = function(app) {
  app.use(require('generate-editorconfig'));

  // specify any tasks from generate-editorconfig. Example:
  app.task('default', ['editorconfig']);
};
```

**Use as a sub-generator**

Use as a sub-generator if you want expose the features, settings and tasks from generate-editorconfig on a _namespace_ in your generator.

In your `generator.js`:

```js
module.exports = function(app) {
  // register the generate-editorconfig generator (as a sub-generator with an arbitrary name)
  app.register('foo', require('generate-editorconfig'));

  app.task('minify', function(cb) {
    // minify some stuff
    cb();
  });

  // run the "default" task on generate-editorconfig (aliased as `foo`), 
  // then run the `minify` task defined in our generator
  app.task('default', function(cb) {
    app.generate(['foo:default', 'minify'], cb);
  });
};
```

Tasks from `generate-editorconfig` will be available on the `foo` namespace from the API and the command line. Continuing with the previous code example, to run the `default` task on `generate-editorconfig`, you would run `gen foo:default` (or just `gen foo` if `foo` does not conflict with an existing task on your generator).

To learn more about namespaces and sub-generators, and how they work, [visit the getting started guide](https://github.com/generate/getting-started).

## Related projects

You might also be interested in these projects:

* [generate-license](https://www.npmjs.com/package/generate-license): Generate a license file for a GitHub project. | [homepage](https://github.com/generate/generate-license "Generate a license file for a GitHub project.")
* [generate-package](https://www.npmjs.com/package/generate-package): Generate a package.json for a project. This generator can be used as a plugin or… [more](https://github.com/generate/generate-package) | [homepage](https://github.com/generate/generate-package "Generate a package.json for a project. This generator can be used as a plugin or sub-generator in your own generator, as a component of a larger build workflow.")
* [generate-travis](https://www.npmjs.com/package/generate-travis): Generate a .travis.yml file to the cwd or specified directory. Install globally and run with… [more](https://github.com/generate/generate-travis) | [homepage](https://github.com/generate/generate-travis "Generate a .travis.yml file to the cwd or specified directory. Install globally and run with generate's CLI, or use as a component in your own generator.")

## Contributing

This document was generated by [verb-readme-generator](https://github.com/verbose/verb-readme-generator) (a [verb](https://github.com/verbose/verb) generator), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new). Or visit the [verb-readme-generator](https://github.com/verbose/verb-readme-generator) project to submit bug reports or pull requests for the readme layout template.

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-readme-generator && verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/generate/generate-editorconfig/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on June 21, 2016._