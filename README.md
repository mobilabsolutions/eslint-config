# Mobilab Solutions eslint-config

[![Build Status](https://travis-ci.com/mobilabsolutions/eslint-config.svg?token=4jUapmoJ1R63bAvgqCWb&branch=master)](https://travis-ci.com/mobilabsolutions/eslint-config)

## Usage

Include the package that you want to the "extends" array in your .eslintrc.\* file.\
You can combine with multiple packages. See the available [packages](#addons)

### Sample

An example to how configure an ES6 + React project.\

#### Installation and usage

`npm install --save-dev eslint prettier @mobilabsolutions/eslint-config @mobilabsolutions/eslint-config-react`

```json
{
  "extends": [
    "@mobilabsolutions/eslint-config/es6",
    "@mobilabsolutions/eslint-config-react"
  ]
}
```

## Addons
[@mobilabsolutions/eslint-config](./addons/base/README.md) - When using ES5, ES6, ... \
[@mobilabsolutions/eslint-config-react](./addons/react/README.md) - When using React (requires es6 base configuration or higher)\
[@mobilabsolutions/eslint-config-node](./addons/node/README.md) - When using NodeJS\
[@mobilabsolutions/eslint-config-jest](./addons/jest/README.md) - When using Jest to develop the tests\

## Overrides

You can easily override any specific options.\
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

## Development

```bash
git clone git@github.com:mobilabsolutions/eslint-config.git
cd eslint-config
yarn
yarn run bootstrap
```

## License

[MIT License](./LICENSE.md)
