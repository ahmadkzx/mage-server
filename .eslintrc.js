module.exports = {
  plugins: ['prettier'],
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
