/* eslint-disable @typescript-eslint/no-empty-interface */
/*
 * @Author: Mr zhang
 * @Date: 2023-03-09 19:23:03
 * @LastEditTime: 2023-03-21 21:30:30
 * @LastEditors: Mr zhang
 * @Description:
 * @FilePath: \wui-design-uni\src\shime-uni.d.ts
 * 记得注释
 */
export {}
declare module 'vue' {
  type Hooks = App.AppInstance & Page.PageInstance
  interface ComponentCustomOptions extends Hooks {}
}
