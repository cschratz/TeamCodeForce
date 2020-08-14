module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'airbnb',
    // "plugin:jsx-a11y/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
    'jsx-a11y',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};