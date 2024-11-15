/*
 * @Author: Mr zhang
 * @Date: 2023-08-01 11:12:05
 * @LastEditTime: 2024-05-08 13:29:27
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: \wui-design-uni\docs\.vitepress\theme\composables\friendly.ts
 * 记得注释
 */
import { ref, onMounted } from 'vue'

export type FriendlyLink = {
  icon: string
  title: string
  details: string
  link: string
}

const data = ref<FriendlyLink[]>([])

export function useFriendly() {
  onMounted(async () => {
    if (data.value && data.value.length) {
      return
    }
    const json = {
      links: [
        {
          icon: 'https://isdm-public.oss-cn-hangzhou.aliyuncs.com/image/vue-logo.png',
          title: 'Elegant Admin',
          details: 'Elegant Admin 是一个基于 Vue3、Vite、TypeScript、elementPlus、Pinia、Unocss 开发的中后台模版',
          link: 'https://github.com/zhangyao1990/elegant-admin'
        }
      ]
    }
    data.value = json && json.links ? json.links : []
  })

  return {
    data,
  }
}



