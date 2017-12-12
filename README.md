# ESLint config for fireyy

This config is supposed to work with [XO](https://github.com/sindresorhus/xo) or [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo).

## Features

- Indent with 2 spaces and no semicolon
- [Prettier!](#use-prettier)
- [Lint code blocks in Markdown!](#lint-code-blocks-in-markdown)
- ...some tweaks for my preference.

## Install

```bash
$ yarn add eslint eslint-config-fireyy -D
```

## Usage

In ESLint:

```js
{
  "eslintConfig": {
    "extends": ["xo/esnext", "fireyy"]
  }
}
```

Or in XO:

```js
{
  "xo": {
    "extends": "fireyy"
  }
}
```

### Use Prettier

```js
{
  "xo": {
    "extends": "fireyy/prettier"
  }
}
```

### Lint code blocks in markdown

It uses [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown):

```js
{
  "xo": {
    "extensions": ["md"]
  }
}
```
