// http://eslint.org/docs/rules/#stylistic-issues

module.exports = {
  rules: {
    // enforce consistent spacing inside array brackets
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // enforce consistent spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': 'error',

    // enforce consistent brace style for blocks
    // http://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],

    // enforce camelcase naming convention
    // http://eslint.org/docs/rules/camelcase
    camelcase: ['error', { properties: 'never' }],

    // require or disallow trailing commas
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'never'],

    // enforce consistent spacing before and after commas
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': 'error',

    // enforce consistent comma style
    // http://eslint.org/docs/rules/comma-style
    'comma-style': 'error',

    // enforce consistent spacing inside computed property brackets
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': 'error',

    // enforce consistent naming when capturing the current execution context
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',

    // enforce at least one newline at the end of files
    // http://eslint.org/docs/rules/eol-last
    'eol-last': 'error',

    // require or disallow spacing between function identifiers and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'error',

    // require or disallow named function expressions
    // http://eslint.org/docs/rules/func-names
    'func-names': 'error',

    // enforce the consistent use of either function declarations or expressions
    // http://eslint.org/docs/rules/func-style
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    // disallow specified identifiers
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // enforce minimum and maximum identifier lengths
    // http://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // require identifiers to match a specified regular expression
    // http://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // enforce consistent indentation
    // http://eslint.org/docs/rules/indent
    indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],

    // enforce the consistent use of either double or single quotes in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': 'off',

    // enforce consistent spacing between keys and values in object literal properties
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // enforce consistent spacing before and after keywords
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],

    // enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    'line-comment-position': 'off',

    // enforce consistent linebreak style
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'error',

    // require empty lines around comments
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    // http://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': 'off',

    // enforce a maximum depth that blocks can be nested
    // http://eslint.org/docs/rules/max-depth
    'max-depth': ['error', 4],

    // enforce a maximum line length
    // http://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],

    // enforce a maximum number of lines per file
    // http://eslint.org/docs/rules/max-lines
    'max-lines': ['error', 500],

    // enforce a maximum depth that callbacks can be nested
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['error', 5],

    // enforce a maximum number of parameters in function definitions
    // http://eslint.org/docs/rules/max-params
    'max-params': ['error', 5],

    // enforce a maximum number of statements allowed per line
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': 'error',

    // enforce a maximum number of statements allowed in function blocks
    // http://eslint.org/docs/rules/max-statements
    'max-statements': ['error', 50],

    // enforce newlines between operands of ternary expressions
    // http://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',

    // require constructor function names to begin with a capital letter
    // http://eslint.org/docs/rules/new-cap
    'new-cap': ['error', { capIsNew: false }],

    // require parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // require or disallow an empty line after var declarations
    // http://eslint.org/docs/rules/newline-after-var
    'newline-after-var': 'off',

    // require an empty line before return statements
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'off',

    // require a newline after each call in a method chain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow Array constructors
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // disallow bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // disallow continue statements
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // disallow inline comments after code
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // disallow if statements as the only statement in else blocks
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // disallow mixed binary operators
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: false
      }
    ],

    // disallow mixed spaces and tabs for indentation
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // disallow multiple empty lines
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // disallow Object constructors
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // disallow the unary operators ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // disallow specified syntax
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'ForStatement',
      'ForOfStatement',
      'LabeledStatement',
      'WithStatement'
    ],

    // disallow tabs in file
    // http://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // disallow ternary operators
    // http://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',

    // disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',

    // disallow ternary operators when simpler alternatives exist
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // enforce consistent line breaks inside braces
    // http://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': 'off',

    // enforce consistent spacing inside braces
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // enforce placing object properties on separate lines
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true
      }
    ],

    // require or disallow newlines around var declarations
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // enforce variables to be declared either together or separately in functions
    // http://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // require or disallow assignment operator shorthand where possible
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': 'error',

    // enforce consistent linebreak style for operators
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': 'off',

    // require or disallow padding within blocks
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', 'never'],

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // enforce the consistent use of either backticks, double, or single quotes
    // http://eslint.org/docs/rules/quotes
    quotes: ['error', 'single', { avoidEscape: true }],

    // enforce consistent spacing before and after semicolons
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': ['error', { before: false, after: true }],

    // require or disallow semicolons instead of ASI
    // http://eslint.org/docs/rules/semi
    semi: ['error', 'always'],

    // requires object keys to be sorted
    // http://eslint.org/docs/rules/sort-keys
    'sort-keys': 'off',

    // require variables within the same declaration block to be sorted
    // http://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // enforce consistent spacing before blocks
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',

    // enforce consistent spacing before function definition opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],

    // enforce consistent spacing inside parentheses
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // require spacing around operators
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // enforce consistent spacing before or after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {}
      }
    ],

    // enforce consistent spacing after the // or /* in a comment
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+']
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true
        }
      }
    ],

    // require or disallow Unicode byte order mark (BOM)
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': 'error',

    // require parenthesis around regex literals
    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off'
  }
};
