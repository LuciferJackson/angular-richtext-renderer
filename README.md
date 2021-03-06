[![Build Status](https://secure.travis-ci.org/mlaval/angular-richtext-renderer.png)](http://travis-ci.org/mlaval/angular-richtext-renderer)
# angular-richtext-renderer
A renderer to generate rich text document (e.g. markdown) with Angular 2.
It can be used in node or in a browser.

**All the documentations of this repository have been created with this renderer, including the current lines.**

## Usage
Create an Angular2 `Component` and use the specific bootstrap method, e.g: `bootstrapRichText(HelloApp, FSPrinter, MarkdownFormatter);`
The `Formatter` and `Printer` are required. You can use the ones provided here, or create your own.

For more details, have a look at the [samples](https://github.com/mlaval/angular-richtext-renderer/tree/master/sample) in this repository.

### Warnings
* White spaces and line returns are preserved by the rendered, none are added. So all indentation and new lines have to be managed by the user
* Only bind to attributes, never to properties, otherwise it will fail
* There are no native events

## Customization

### Formatter
The [formatter](https://github.com/mlaval/angular-richtext-renderer/tree/master/src/formatter) generates the actual rich text string.
As an input, it takes a tree of nodes which represents the full application. The tree is built by the Angular2 and the renderer.
Two are available:
* `DefaultFormatter`: a simple one which preserves the text but apply all Angular2's magic
* `MarkdownFormatter`: it extends the default one by defining special elements matching the markdown syntax, [more info](README-markdown.md).

### Printer
The [printer](https://github.com/mlaval/angular-richtext-renderer/tree/master/src/printer) is in charge of handling the formatter's output, i.e. the rich text string.
The rich text string is fully generated each time the something is updated and a refresh happens.
Three are available:
* `DefaultPrinter`: simply logs in the console
* `FsPrinter`: saves the rich text in a file
* `BrowserPrinter`: displays the rich text in a code HTMLElement

## Development

### Preparing your environment
* Clone this repository or a fork of it
* Install Gulp and TSD globally: `npm install -g gulp typings`
* Install local npm modules: `npm install`

### Running scripts

To build the documentation:
* Launch `gulp doc` to continuously build it and generate output in `./build/sample/` folder

To run the sample in node:
* Launch `gulp sample.node` to continuously build it and generate output in `./build/sample/` folder

To run the sample in a browser:
* Launch `gulp sample.browser` to continuously build it and start a webserver at http://localhost:9001

To run tests in Firefox:
* Launch `gulp test.browser`
