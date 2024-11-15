/*
 * @Author: Mr zhang
 * @Date: 2024-01-25 23:06:48
 * @LastEditTime: 2024-01-26 14:00:48
 * @LastEditors: Mr zhang
 * @Description:
 * @FilePath: \wui-design-uni\src\uni_modules\wui-design-uni\components\composables\useTranslate.ts
 * 记得注释
 */
import { camelCase, getPropByPath, isFunction } from '../common/util'
import Locale from '../../locale'

export const useTranslate = (name?: string) => {
  const prefix = name ? camelCase(name) + '.' : ''
  const translate = (key: string, ...args: unknown[]) => {
    const currentMessages = Locale.messages()
    const message = getPropByPath(currentMessages, prefix + key)
    return isFunction(message) ? message(...args) : message
  }

  return { translate }
}
