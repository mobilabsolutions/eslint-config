'use strict';

const fs = require('fs');
const path = require('path');

const rules = fs.readdirSync(path.join(__dirname, 'rules')); // eslint-disable-line

module.exports = {
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  'plugins': [
    'prefer-object-spread'
  ],
  extends: ['prettier'].concat(
    rules
      .filter(name => name.endsWith('.js'))
      .map(name => `./rules/${name}`)
  )
};
