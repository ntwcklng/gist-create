#!/usr/bin/env node

const meow = require('meow');
const gistCreate = require('index.js');

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
    p: 'public'
  }
});

gistCreate(cli.input[0], cli.flags);