/***
 * element-plus在打包时会有类型检测不通过的情况，造成无法打包
 * 这个声明文件做临时使用，等待element-plus官方修复，当然也可以在bulid命令处去掉
 * vue-tsc --noEmit
 * 参考地址：https://github.com/element-plus/element-plus-vite-starter/issues/12
 * ***/

// error TS2304: Cannot find name 'Nullable'.
declare type Nullable<T> = T | null;

// error TS2304: Cannot find name 'ComponentSize'.
declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini';

// error TS2688: Cannot find type definition file for 'node'.
// 这个错可以执行npm i @types/node -D解决
