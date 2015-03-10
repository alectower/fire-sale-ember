# Ember App

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
