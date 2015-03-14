#Fire Sale

Front-end for Fire Sale

Fire Sale is a stock alert app that sends the user an alert
email once a stock has dropped below a given price.

The ember app provides the UI for entering a stock symbol
and stock price that will trigger an alert.

Taking advantage of [ember-cli-deploy](https://github.com/achambers/ember-cli-deploy "Ember CLI Deploy"),
the front-end is decoupled from the back-end app, making
it easier to try out different back-end implementations.

[Rails back-end implementation](https://github.com/uniosx/fire-sale-rails "Fire Sale Rails App").

# Ember App Setup

Prereq: node

```
npm install -g ember-cli
npm install -g bower
cd ember
ember install
ember serve --proxy http://localhost:3000
```

# View app

`Open http://localhost:4200/ in your browswer`

# Issues

If you get a 'File already exists' type error in the ember
app, run the following:

```
cd ember
rm -rf bower_components node_modules tmp dist && npm cache clean
ember install
```
