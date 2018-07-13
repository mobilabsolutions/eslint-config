# Mobilab eslint-config-base

## Installation

When using an npm 5+

`npx install-peerdeps --dev eslint-config-base`

If using npm < 5

### OSX/Linux

To install this package and all its peer dependencies run:

```bash
(
  export PKG=@mobilabsolutions/eslint-config-base;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

### Windows

```bash
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-base
```

## Usage

Include the `@mobilabsolutions/eslint-config-base` to the "extends" array in your .eslintrc.\* file.\

## Overrides

You can easily override specific this settings [eslint-plugin-base](https://github.com/base-community/eslint-plugin-base).\
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
See how to contribute [Contributors Guide](./../../CONTRIBUTING.md)

## License
[MIT License](./../../LICENSE.md)
