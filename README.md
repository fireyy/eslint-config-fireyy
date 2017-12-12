# ESLint config for fireyy

Work with:

- [eslint](https://eslint.org) and [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo).
- [XO](https://github.com/sindresorhus/xo)

## Features

- Indent with 2 spaces
- no semicolon
- [Prettier Code](#use-prettier)
- [Lint code blocks in Markdown](#lint-code-blocks-in-markdown)

## Install

```bash
$ yarn add eslint eslint-config-xo eslint-config-fireyy -D
```

or

```bash
$ yarn add xo eslint-config-fireyy -D
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
