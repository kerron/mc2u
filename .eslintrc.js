module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    curly: ['error', 'multi-or-nest'],
    'arrow-parens': ['error', 'always'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
  },
}
