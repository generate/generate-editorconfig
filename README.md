# generate-editorconfig [![NPM version](https://img.shields.io/npm/v/generate-editorconfig.svg?style=flat)](https://www.npmjs.com/package/generate-editorconfig) [![NPM downloads](https://img.shields.io/npm/dm/generate-editorconfig.svg?style=flat)](https://npmjs.org/package/generate-editorconfig) [![Build Status](https://img.shields.io/travis/generate/generate-editorconfig.svg?style=flat)](https://travis-ci.org/generate/generate-editorconfig)

The generator creates a `.editorconfig` file in the current working directory. Run from the command line or register as a sub-generator or plugin in your own generator.

![generate-editorconfig demo](https://raw.githubusercontent.com/generate/generate-editorconfig/master/demo.gif)

## What is "Generate"?

[Generate](https://github.com/generate/generate) is a command line tool and developer framework for scaffolding out new GitHub projects.

For more information:

* Visit the [generate project](https://github.com/generate/generate)
* Visit the [generate documentation](https://github.com/generate/generate/blob/master/docs/)
* Find [generators on npm](https://www.npmjs.com/browse/keyword/generate-generator) (help us [author micro-generators](https://github.com/generate/generate/blob/master/docs/micro-generators.md))

## Install

**Installing the CLI**

To run the `editorconfig` generator from the command line, you'll need to install [Generate](https://github.com/generate/generate) globally first. You can do that now with the following command:

```sh
$ npm install --global generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory.

**Install generate-editorconfig**

Install this module with the following command:

```sh
$ npm install --global generate-editorconfig
```

## Usage

Run this generator's `default` [task](https://github.com/generate/generate/blob/master/docs/docs/tasks.md#default-task) with the following command:

```sh
$ gen editorconfig
```

## Available Tasks

### [editorconfig](generator.js#L19)

Generates a `.editorconfig` file to the current working directory. You can override the default template by adding a custom template to the `templates` directory in user home, at the following path: `~/templates/_editorconfig`

**Example**

```sh
$ gen editorconfig
```

Visit Generate's [documentation for tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

## Customization

**Destination directory**

Install [generate-dest](https://github.com/generate/generate-dest) globally to customize the destination directory. Once installed, just prefix `dest` before any other generator names. For example:

```sh
$ gen dest eslint
```

**Overriding templates**

You can override any of the templates by adding a template of the same name to the `templates` directory in user home. For example, to override the `.editorconfig` template, add a template at the following path `~/templates/.editorconfig`.

## About

### Related projects

* [generate-license](https://www.npmjs.com/package/generate-license): Generate a license file for a GitHub project. | [homepage](https://github.com/generate/generate-license "Generate a license file for a GitHub project.")
* [generate-package](https://www.npmjs.com/package/generate-package): Generate] a package.json from a pre-defined or user-defined template. This generator can be used from… [more](https://github.com/generate/generate-package) | [homepage](https://github.com/generate/generate-package "[Generate] a package.json from a pre-defined or user-defined template. This generator can be used from the command line when globally installed, or as a plugin or sub-generator in your own generator.")
* [generate-readme](https://www.npmjs.com/package/generate-readme): Generate a README.md using answers to prompts and data from the environment, like `package.json`, `.git… [more](https://github.com/generate/generate-readme) | [homepage](https://github.com/generate/generate-readme "Generate a README.md using answers to prompts and data from the environment, like`package.json`,`.git` config, etc. This generator can be run by command line if Generate is installed globally, or you can use this as a plugin or sub-generator in your own")
* [generate-travis](https://www.npmjs.com/package/generate-travis): Generate a .travis.yml file to the cwd or specified directory. Install globally and run with… [more](https://github.com/generate/generate-travis) | [homepage](https://github.com/generate/generate-travis "Generate a .travis.yml file to the cwd or specified directory. Install globally and run with generate's CLI, or use as a component in your own generator.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/generate/generate-editorconfig/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 27, 2016._