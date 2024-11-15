<template>
  <view :class="['wui-card', type == 'rectangle' ? 'is-rectangle' : '', customClass]" :style="customStyle">
    <view :class="['wui-card__title-content', customTitleClass]">
      <view class="wui-card__title">
        <text v-if="title">{{ title }}</text>
        <slot v-else name="title"></slot>
      </view>
    </view>
    <view :class="`wui-card__content ${customContentClass}`">
      <slot></slot>
    </view>
    <view :class="`wui-card__footer ${customFooterClass}`">
      <slot name="footer"></slot>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'wui-card',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { cardProps } from './types'

defineProps(cardProps)
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
