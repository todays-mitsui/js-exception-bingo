module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-eval': 'off',
    'vue/no-reserved-keys': 'off'
  }
}
