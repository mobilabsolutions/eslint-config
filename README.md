# Mobilab Solutions eslint-config


[![Build Status](https://travis-ci.com/mobilabsolutions/eslint-config.svg?token=4jUapmoJ1R63bAvgqCWb&branch=master)](https://travis-ci.com/mobilabsolutions/eslint-config)

## Installation

```bash
npm install --save-dev @mobilabsolutions/eslint-config
```

### OSX/Linux

To install this package and all its peer dependencies run:

```bash
(
  export PKG=@mobilabsolutions/eslint-config;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

### Windows

```bash
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-skeleton
```

## Usage

Include the `@mobilabsolutions/eslint-config/*` to the "extends" array in your .eslintrc.\* file.\
You can combine between the standard and the addons configuration.

### Standard configuration

`@mobilabsolutions/eslint-config/es5` - ES5 config\
`@mobilabsolutions/eslint-config/es6` - ES6 config

### Addons configuration

`@mobilabsolutions/eslint-config/node` - If you are going to develop code for NodeJS\
`@mobilabsolutions/eslint-config/react` - If you are going to use React (requires es6 base configuration or higher)\
`@mobilabsolutions/eslint-config/jest` - If you are going to use Jest to develop tests\

### Sample

An example to how configure an ES6 + React project.\

#### Installation and usage
`npm install --save-dev @mobilabsolutions/eslint-config @mobilabsolutions/eslint-config-react`

```json
{
  "extends": [
    "@mobilabsolutions/eslint-config/es6",
    "@mobilabsolutions/eslint-config/react",
  ]
}
```

## Addons

[eslint-config-react](./addons/react/README.md)\
[eslint-config-node](./addons/node/README.md)\
[eslint-config-jest](./addons/jest/README.md)

## Overrides

You can easily override specific this settings.\
See http://eslint.org/docs/developer-guide/shareable-configs for more information.

### Example

```json
{
  "rules": {
    "constructor-super": "off",
    "generator-star-spacing": "off",
    "no-class-assign": "off",
  }
}
```

## Contributing
See how to contribute [Contributors Guide](/CONTRIBUTING.md)

See the [.]
## License
[MIT License](./LICENSE.md)
