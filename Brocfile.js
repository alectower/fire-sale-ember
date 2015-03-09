/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var env = EmberApp.env();
var isProduction = ['production'].indexOf(env) > -1;

var app = new EmberApp({
  fingerprint: {
    prepend: 'https://s3.amazonaws.com/firesale-' + (isProduction ? 'prod' : 'dev')
  },
  minifyAssets: { enabled: isProduction },
  minifyJS: { enabled: isProduction }
});

app.import('bower_components/bootstrap/dist/css/bootstrap.css')
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
  destDir: 'assets'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/js/bootstrap.js');

module.exports = app.toTree();
