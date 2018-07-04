"use strict";

const fs = require("fs");
const path = require("path");
console.log(222)
const rules = fs.readdirSync(path.join(__dirname, "rules"));

module.exports = {
  plugins: ["react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: rules
    .filter(name => name.endsWith(".js"))
    .map(name => `./rules/${name}`)
};
