module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // 样式规范以 prettier 为准
  ],
  rules: {
    /**
     "off" 或 0 - 关闭规则
     "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
     "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    curly: 'error',
    'prettier/prettier': 1,
    semi: ['error', 'never'],
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-var-requires': 'off', //https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md
  },
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  plugins: ['@typescript-eslint', 'prettier'], //定义了该eslint文件所依赖的插件
}
