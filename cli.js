#!/usr/bin/env node

const meow = require('meow');
const updateNotifier = require('update-notifier');
const gistCreate = require('./index.js');
const pkg = require('./package.json');

const cli = meow(`
  Usage
    $ gist-create <file> [options,]

  Options
    --description, -d <string> Add a description
    --public, -p <boolean> Make your Gist Public (default: false)

  Example
    $ gist-create index.html --description "My non-public index.html file" --public false
`, {
  alias: {
    d: 'description',
    p: 'public',
  },
});

updateNotifier({ pkg }).notify();
gistCreate(cli.input[0], cli.flags);
