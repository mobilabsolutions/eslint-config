"use strict";

module.exports = {
  rules: {
    // enforce getter and setter pairs in objects
    // http://eslint.org/docs/rules/accessor-pairs
    "accessor-pairs": "off",

    // enforce return statements in callbacks of array methods
    // http://eslint.org/docs/rules/array-callback-return
    "array-callback-return": "error",

    // enforce the use of variables within the scope they are defined
    // http://eslint.org/docs/rules/block-scoped-var
    "block-scoped-var": "error",

    // enforce that class methods utilize this
    // http://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": "off",

    // enforce a maximum cyclomatic complexity allowed in a program
    // http://eslint.org/docs/rules/complexity
    complexity: ["error", 20],

    // require return statements to either always or never specify values
    // http://eslint.org/docs/rules/consistent-return
    "consistent-return": "error",

    // enforce consistent brace style for all control statements
    // http://eslint.org/docs/rules/curly
    curly: "off",

    // require default cases in switch statements
    // http://eslint.org/docs/rules/default-case
    "default-case": ["error", { commentPattern: "^no default$" }],

    // enforce consistent newlines before and after dots
    // http://eslint.org/docs/rules/dot-location
    "dot-location": ["error", "property"],

    // enforce dot notation whenever possible
    // http://eslint.org/docs/rules/dot-notation
    "dot-notation": "error",

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: ["error", "allow-null"],

    // require for-in loops to include an if statement
    // http://eslint.org/docs/rules/guard-for-in
    "guard-for-in": "error",

    // disallow the use of alert, confirm, and prompt
    // http://eslint.org/docs/rules/no-alert
    "no-alert": "error",

    // disallow the use of arguments.caller or arguments.callee
    // http://eslint.org/docs/rules/no-caller
    "no-caller": "error",

    // disallow lexical declarations in case clauses
    // http://eslint.org/docs/rules/no-case-declarations
    "no-case-declarations": "error",

    // disallow division operators explicitly at the beginning of regular expressions
    // http://eslint.org/docs/rules/no-div-regex
    "no-div-regex": "off",

    // disallow else blocks after return statements in if statements
    // http://eslint.org/docs/rules/no-else-return
    "no-else-return": "error",

    // disallow empty functions
    // http://eslint.org/docs/rules/no-empty-function
    "no-empty-function": "error",

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    "no-empty-pattern": "error",

    // disallow null comparisons without type-checking operators
    // http://eslint.org/docs/rules/no-eq-null
    "no-eq-null": "off",

    // disallow the use of eval()
    // http://eslint.org/docs/rules/no-eval
    "no-eval": "error",

    // disallow extending native types
    // http://eslint.org/docs/rules/no-extend-native
    "no-extend-native": "error",

    // disallow unnecessary calls to .bind()
    // http://eslint.org/docs/rules/no-extra-bind
    "no-extra-bind": "error",

    // disallow unnecessary labels
    // http://eslint.org/docs/rules/no-extra-label
    "no-extra-label": "error",

    // disallow fallthrough of case statements
    // http://eslint.org/docs/rules/no-fallthrough
    "no-fallthrough": "error",

    // disallow leading or trailing decimal points in numeric literals
    // http://eslint.org/docs/rules/no-floating-decimal
    "no-floating-decimal": "error",

    // disallow assignments to native objects or read-only global variables
    // http://eslint.org/docs/rules/no-global-assign
    "no-global-assign": ["error", { exceptions: [] }],

    // disallow shorthand type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-coercion": [
      "error",
      {
        boolean: false,
        number: true,
        string: true,
        allow: []
      }
    ],

    // disallow var and named function declarations in the global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    "no-implicit-globals": "off",

    // disallow the use of eval()-like methods
    // http://eslint.org/docs/rules/no-implied-eval
    "no-implied-eval": "error",

    // disallow this keywords outside of classes or class-like objects
    // http://eslint.org/docs/rules/no-invalid-this
    "no-invalid-this": "off",

    // disallow the use of the __iterator__ property
    // http://eslint.org/docs/rules/no-iterator
    "no-iterator": "error",

    // disallow labeled statements
    // http://eslint.org/docs/rules/no-labels
    "no-labels": "error",

    // disallow unnecessary nested blocks
    // http://eslint.org/docs/rules/no-lone-blocks
    "no-lone-blocks": "error",

    // disallow function declarations and expressions inside loop statements
    // http://eslint.org/docs/rules/no-loop-func
    "no-loop-func": "error",

    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    "no-magic-numbers": "off",

    // disallow multiple spaces
    // http://eslint.org/docs/rules/no-multi-spaces
    "no-multi-spaces": "error",

    // disallow multiline strings
    // http://eslint.org/docs/rules/no-multi-str
    "no-multi-str": "error",

    // disallow new operators with the Function object
    // http://eslint.org/docs/rules/no-new-func
    "no-new-func": "error",

    // disallow new operators with the String, Number, and Boolean objects
    // http://eslint.org/docs/rules/no-new-wrappers
    "no-new-wrappers": "error",

    // disallow new operators outside of assignments or comparisons
    // http://eslint.org/docs/rules/no-new
    "no-new": "error",

    // disallow octal escape sequences in string literals
    // http://eslint.org/docs/rules/no-octal-escape
    "no-octal-escape": "error",

    // disallow octal literals
    // http://eslint.org/docs/rules/no-octal
    "no-octal": "error",

    // disallow reassigning function parameters
    // http://eslint.org/docs/rules/no-param-reassign
    "no-param-reassign": "off",

    // disallow the use of the __proto__ property
    // http://eslint.org/docs/rules/no-proto
    "no-proto": "error",

    // disallow var redeclaration
    // http://eslint.org/docs/rules/no-redeclare
    "no-redeclare": "error",

    // disallow assignment operators in return statements
    // http://eslint.org/docs/rules/no-return-assign
    "no-return-assign": ["error", "except-parens"],

    // disallow javascript: urls
    // http://eslint.org/docs/rules/no-script-url
    "no-script-url": "off",

    // disallow assignments where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-assign
    "no-self-assign": "error",

    // disallow comparisons where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-compare
    "no-self-compare": "error",

    // disallow comma operators
    // http://eslint.org/docs/rules/no-sequences
    "no-sequences": "error",

    // disallow throwing literals as exceptions
    // http://eslint.org/docs/rules/no-throw-literal
    "no-throw-literal": "error",

    // disallow unmodified loop conditions
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    "no-unmodified-loop-condition": "error",

    // disallow unused expressions
    // http://eslint.org/docs/rules/no-unused-expressions
    "no-unused-expressions": "error",

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    "no-unused-labels": "error",

    // disallow unnecessary calls to .call() and .apply()
    // http://eslint.org/docs/rules/no-useless-call
    "no-useless-call": "off",

    // disallow unnecessary concatenation of literals or template literals
    // http://eslint.org/docs/rules/no-useless-concat
    "no-useless-concat": "error",

    // disallow unnecessary escape characters
    // http://eslint.org/docs/rules/no-useless-escape
    "no-useless-escape": "error",

    // disallow void operators
    // http://eslint.org/docs/rules/no-void
    "no-void": "error",

    // disallow specified warning terms in comments
    // http://eslint.org/docs/rules/no-warning-comments
    "no-warning-comments": "off",

    // disallow with statements
    // http://eslint.org/docs/rules/no-with
    "no-with": "error",

    // enforce the consistent use of the radix argument when using parseInt()
    // http://eslint.org/docs/rules/radix
    radix: "error",

    // require var declarations be placed at the top of their containing scope
    // http://eslint.org/docs/rules/vars-on-top
    "vars-on-top": "error",

    // require parentheses around immediate function invocations
    // http://eslint.org/docs/rules/wrap-iife
    "wrap-iife": "error",

    // require or disallow “Yoda” conditions
    // http://eslint.org/docs/rules/yoda
    yoda: "error"
  }
};
