'use strict';

const fs = require('fs');
const path = require('path');

const rules = fs.readdirSync(path.join(__dirname, 'rules'));

module.exports = {
  plugins: ['react', 'jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: rules
    .filter(name => name.endsWith('.js'))
    .map(name => `./rules/${name}`)
};
