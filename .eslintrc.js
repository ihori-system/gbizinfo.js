module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'ignorePatterns': [
    'docs/**',
  ],
  'rules': {
    'max-len': 'off',
  },
};
