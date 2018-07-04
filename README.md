# Mobilab eslint-config

## Installation

```
npm install --save-dev @mobilabsolutions/eslint-config
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

```
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

You can easily override specific this settings.
See http://eslint.org/docs/developer-guide/shareable-configs for more information.
