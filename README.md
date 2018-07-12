# Mobilab Solutions eslint-config

[![Build Status](https://travis-ci.com/mobilabsolutions/eslint-config.svg?token=4jUapmoJ1R63bAvgqCWb&branch=master)](https://travis-ci.com/mobilabsolutions/eslint-config)

## Installation

```bash
npm install --save-dev @mobilabsolutions/eslint-config
```

## Usage

Include the `@mobilabsolutions/eslint-config/*` to the "extends" array in your .eslintrc.\* file.\
You can combine with other packages.

### Standard configuration

`@mobilabsolutions/eslint-config/es5` - ES5 config\
`@mobilabsolutions/eslint-config/es6` - ES6 config

### Sample

An example to how configure an ES6 + React project.\

#### Installation and usage

`npm install --save-dev @mobilabsolutions/eslint-config @mobilabsolutions/eslint-config-react`

```json
{
  "extends": [
    "@mobilabsolutions/eslint-config/es6",
    "@mobilabsolutions/eslint-config-react"
  ]
}
```

## Addons

[@mobilabsolutions/eslint-config-react](./addons/react/README.md) - If you are going to use React (requires es6 base configuration or higher)\
[@mobilabsolutions/eslint-config-node](./addons/node/README.md) - If you are going to develop code for NodeJS\
[@mobilabsolutions/eslint-config-jest](./addons/jest/README.md) - If you are going to use Jest to develop tests\

## Overrides

You can easily override specific this settings.\
See http://eslint.org/docs/developer-guide/shareable-configs for more information.

### Example

```json
{
  "rules": {
    "constructor-super": "off",
    "generator-star-spacing": "off",
    "no-class-assign": "off"
  }
}
```

## Contributing

See how to contribute [Contributors Guide](/CONTRIBUTING.md)

## License

[MIT License](./LICENSE.md)
