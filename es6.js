'use strict';

const fs = require('fs');
const path = require('path');

const rules = fs.readdirSync(path.join(__dirname, 'rules')); // eslint-disable-line

module.exports = {
  env: {
    es6: true
  },
  plugins: ['prettier', 'import'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: ['prettier'].concat(
    rules.filter(name => name.endsWith('.js')).map(name => `./rules/${name}`)
  )
};
