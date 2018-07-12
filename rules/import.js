module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  plugins: ["import"],

  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json"]
      }
    },
    "import/extensions": [".js", ".mjs", ".jsx"],
    "import/core-modules": [],
    "import/ignore": ["node_modules", "\\.(coffee|scss|css|less|hbs|svg|json)$"]
  },

  rules: {
    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    "import/no-unresolved": "off",

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    "import/no-extraneous-dependencies": "off",

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    "import/extensions": "off",

    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    "import/prefer-default-export": "off",

    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    "import/newline-after-import": "off",

    // Forbid Webpack loader syntax in imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    "import/no-webpack-loader-syntax": "off"
  }
};
