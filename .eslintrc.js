module.exports = {
  parserOptions: {
    ecmaVersion: 9,
  },
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-prototype-builtins': 'off',
  },
  overrides: [
    {
      files: '__tests__/**/*',
      env: {
        jest: true,
      },
    },
  ],
}
