# Mobilab eslint-config-react

## Installation
```
npm install --save-dev @mobilabsolutions/eslint-config-react
```

## Usage

Include the `@mobilabsolutions/eslint-config-react` to the "extends" array in your .eslintrc.\* file.\

### OSX/Linux

To install this package and all its peer dependencies run:

```bash
(
  export PKG=@mobilabsolutions/eslint-config-react;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

### Windows

```bash
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-skeleton
```

## Overrides

You can easily override specific this settings [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).\
See http://eslint.org/docs/developer-guide/shareable-configs for more information.

### Example

```json
{
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
}
```

## Contributing
See how to contribute [Contributors Guide](./../../CONTRIBUTING.md)

## License
[MIT License](./../../LICENSE.md)
