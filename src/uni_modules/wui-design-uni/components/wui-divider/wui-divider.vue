<template>
  <view :class="`wui-divider ${customClass}`" :style="customStyle">
    <view class="wui-divider__line" :style="color ? 'background: ' + color : ''"></view>
    <view class="wui-divider__content" :style="color ? 'color: ' + color : ''">
      <slot></slot>
    </view>
    <view class="wui-divider__line" :style="color ? 'background: ' + color : ''"></view>
  </view>
</template>
<script lang="ts">
export default {
  name: 'wui-divider',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { dividerProps } from './types'

defineProps(dividerProps)
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
