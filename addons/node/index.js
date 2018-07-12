'use strict';

const fs = require('fs');
const path = require('path');

const rules = fs.readdirSync(path.join(__dirname, 'rules')); // eslint-disable-line

module.exports = {
  extends: rules
    .filter(name => name.endsWith('.js'))
    .map(name => `./rules/${name}`)
};
