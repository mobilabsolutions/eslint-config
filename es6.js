"use strict";

const fs = require("fs");
const path = require("path");

const rules = fs.readdirSync(path.join(__dirname, "rules"));

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  extends: rules
    .filter(name => name.endsWith(".js"))
    .map(name => `./rules/${name}`)
};
