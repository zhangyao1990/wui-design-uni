<!--
 * @Author: Mr zhang
 * @Date: 2023-06-12 18:40:58
 * @LastEditTime: 2024-03-15 13:42:55
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: \wui-design-uni\src\uni_modules\wui-design-uni\components\wui-steps\wui-steps.vue
 * 记得注释
-->
<template>
  <view :class="`wui-steps ${customClass} ${vertical ? 'is-vertical' : ''}`">
    <slot />
  </view>
</template>
<script lang="ts">
export default {
  name: 'wui-steps',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>
<script lang="ts" setup>
import { useChildren } from '../composables/useChildren'
import { STEPS_KEY, stepsProps } from './types'

const props = defineProps(stepsProps)

const { linkChildren } = useChildren(STEPS_KEY)

linkChildren({ props })
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
