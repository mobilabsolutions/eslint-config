'use strict';

const fs = require('fs');
const path = require('path');

const rules = fs.readdirSync(path.join(__dirname, 'rules')); // eslint-disable-line

module.exports = {
  plugins: ['react', 'jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['prettier/react'].concat(
    rules.filter(name => name.endsWith('.js')).map(name => `./rules/${name}`)
  )
};
