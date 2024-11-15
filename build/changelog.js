/*
 * @Author: Mr zhang
 * @Date: 2022-02-24 15:37:04
 * @LastEditTime: 2023-08-02 17:52:00
 * @LastEditors: Mr zhang
 * @Description: 讲生成的changelog移动到文档和组件中
 * @FilePath: \wui-design-uni\build\changelog.js
 * 记得注释
 */
const fs = require('fs')
const path = require('path')
const fromPath = path.resolve(__dirname, '../CHANGELOG.md')
const toPath = path.resolve(__dirname, '../src/uni_modules/wui-design-uni')
const docPath = path.resolve(__dirname, '../docs/guide')

try {
  const file = fs.readFileSync(fromPath, 'utf-8')
  fs.writeFileSync(`${toPath}/changelog.md`, file)
  fs.writeFileSync(`${docPath}/changelog.md`, file)
} catch (error) {
  console.log('CHANGELOG 获取失败')
}
