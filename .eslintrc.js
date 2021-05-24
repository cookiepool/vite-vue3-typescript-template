module.exports = {
  root: true,
  env: {
    node: true
  },
  // 为了能解析.vue文件里面的TS代码，必须配置这个解析器
  parser: 'vue-eslint-parser',
  // parserOptions里面的parser的优先级低于上面的parser。
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    soureType: 'module',
    ecmaFeatures: { jsx: true }
  },
  plugins: ['vue', 'prettier', '@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    // 'prettier/@typescript-eslint', // 这个配置已经从eslint-config-prettier 8.x中移除，这儿不在配置这个
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使用单引号
        arrowParens: 'always', // 箭头函数始终包含圆括号
        endOfLine: 'auto', // 自动识别换行是LF还是CRLF，默认prettier是LF
        trailingComma: 'none' // 最后不需要逗号
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
