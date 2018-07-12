'use strict';

const fs = require('fs');
const path = require('path');
const rules = fs.readdirSync(path.join(__dirname, 'rules'));

module.exports = {
  plugins: ['jest'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    'jest/globals': true
  },
  extends: rules
    .filter(name => name.endsWith('.js'))
    .map(name => `./rules/${name}`)
};
