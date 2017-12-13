module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  plugins: ['markdown'],
  rules: {
    // indent with 2 space
    indent: [2, 2, { SwitchCase: 1 }],
    // disable semi
    semi: [2, 'never'],
    'capitalized-comments': 0,
    'object-curly-spacing': ['error', 'always'],
    // space before function paren
    'space-before-function-paren': ['error', 'always'],
    // to allow: if (false) return
    curly: ['error', 'multi-line'],
    // to allow something like: fn && fn()
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true
      }
    ]
  }
}
