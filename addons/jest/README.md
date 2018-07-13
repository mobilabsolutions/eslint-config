# Mobilab eslint-config-jest

## Installation

When using an npm 5+

`npx install-peerdeps --dev eslint-config-jest`

If using npm < 5

### OSX/Linux

To install this package and all its peer dependencies run:

```bash
(
  export PKG=@mobilabsolutions/eslint-config-jest;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

### Windows

```bash
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-jest
```

## Usage

Include the `@mobilabsolutions/eslint-config-jest` to the "extends" array in your .eslintrc.\* file.\

## Overrides

You can easily override specific this settings [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest).\
See http://eslint.org/docs/developer-guide/shareable-configs for more information.

### Example

```json
{
  "rules": {
    "jest/no-disabled-tests": off,
    "jest/no-focused-tests": off
  }
}
```

## Contributing
See how to contribute [Contributors Guide](./../../CONTRIBUTING.md)

## License
[MIT License](./../../LICENSE.md)
