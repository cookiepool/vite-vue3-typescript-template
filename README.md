# vite-vue3-template
Vite + Vue@3全家桶 + Element-Plus + Sass + ESLint With Prettier + lint-staged With husky

> 本模板基于[@vitejs/create-vite-app](https://github.com/vitejs/vite/tree/main/packages/create-app)生成的TS版的模板改造的，各个工具的版本号见package.json

- Vite
  - [vitejs](https://cn.vitejs.dev/)

- Vue@3全家桶
  - [vue-next](https://github.com/vuejs/vue-next)
  - [vue-router-next](https://github.com/vuejs/vue-router-next)
  - [vuex@4.x](https://github.com/vuejs/vuex/tree/4.0)

- Element-Plus
  - [element-plus](https://element-plus.gitee.io/#/zh-CN/)
  
  > 注：element-plus采用按需引入的方式。[配置参考](https://element-plus.gitee.io/#/zh-CN/component/quickstart)

- Sass(Scss)
  vite内部对sass做了处理，我们直接安装sass依赖即可使用
  ```
  npm i sass -D
  ```

- ESLint(TS) + Prettier
  - [eslint](http://eslint.cn/)
  - [prettier](https://prettier.io/)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint#readme)

    ESLint插件，包含了各类定义好的检测Typescript代码的规范
  - [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint#readme)
  
    ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码

  对应代码：
  ```
  // .eslintrc.js
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
  ```
  > endOfLine的官方文档的解释：[链接地址](https://prettier.io/docs/en/options.html#end-of-line)

  > trailingComma：[链接地址](https://prettier.io/docs/en/options.html#trailing-commas)

  VSCode设置里面加入保存文件时自动修复
  ```
  "editor.codeActionsOnSave": {"source.fixAll": true}
  ```
  
- lint-staged + husky
  - [lint-staged](https://github.com/okonet/lint-staged)
  - [husky](https://github.com/typicode/husky/)
  
  > 注意：husky 6 + lint-staged 11的使用方式跟前面的版本不再一样，老的配置方式不再适用，建议使用lint-staged的官方命令来自动安装相关配置
  > 执行命令` npx mrm@2 lint-staged `，执行这个命令前请保证已配置了正确的ESLint。














# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
