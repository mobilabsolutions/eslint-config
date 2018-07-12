// http://eslint.org/docs/rules/#nodejs-and-commonjs

"use strict";

module.exports = {
  rules: {
    // require return statements after callbacks
    // http://eslint.org/docs/rules/callback-return
    "callback-return": "off",

    // require require() calls to be placed at top-level module scope
    // http://eslint.org/docs/rules/global-require
    "global-require": "error",

    // require error handling in callbacks
    // http://eslint.org/docs/rules/handle-callback-err
    "handle-callback-err": "error",

    // disallow require calls to be mixed with regular var declarations
    // http://eslint.org/docs/rules/no-mixed-requires
    "no-mixed-requires": "off",

    // disallow new operators with calls to require
    // http://eslint.org/docs/rules/no-new-require
    "no-new-require": "error",

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    "no-path-concat": "error",

    // disallow the use of process.env
    // http://eslint.org/docs/rules/no-process-env
    "no-process-env": "off",

    // disallow the use of process.exit()
    // http://eslint.org/docs/rules/no-process-exit
    "no-process-exit": "error",

    // disallow specified modules when loaded by require
    // http://eslint.org/docs/rules/no-restricted-modules
    "no-restricted-modules": ["error"],

    // disallow certain properties on certain objects
    // http://eslint.org/docs/rules/no-restricted-properties
    "no-restricted-properties": "error",

    // disallow synchronous methods
    // http://eslint.org/docs/rules/no-sync
    "no-sync": "error"
  }
};
