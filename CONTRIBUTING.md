# Contributing Guide

Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will
always be given.

### Running Tests

```bash
# run tests on each add-on
npm test
```

### Publishing

@mobilabsolutions/eslint-config uses [lerna](https://github.com/lerna/lerna) to structure the repository, and has multiple add-ons to publish out of this mono repository.
We use lerna's "independent" mode, which means that the versioningof each package in the repository is versioned independently.

The `npm run release` command will make a release for each changed add-ons, this means that will create a tag on the repo, publish to npm and generate the `CHANGELOG.md`.

We use [https://semver.org/](semver) and [https://conventionalcommits.org/](conventional commits).

