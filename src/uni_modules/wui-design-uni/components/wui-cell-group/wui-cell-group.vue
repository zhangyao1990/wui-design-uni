<template>
  <view :class="['wui-cell-group', border ? 'is-border' : '', customClass]" :style="customStyle">
    <view v-if="title || value || useSlot" class="wui-cell-group__title">
      <!--左侧标题-->
      <view class="wui-cell-group__left">
        <text v-if="title">{{ title }}</text>
        <slot v-else name="title"></slot>
      </view>
      <!--右侧标题-->
      <view class="wui-cell-group__right">
        <text v-if="value">{{ value }}</text>
        <slot v-else name="value"></slot>
      </view>
    </view>
    <view class="wui-cell-group__body">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'wui-cell-group',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { useChildren } from '../composables/useChildren'
import { CELL_GROUP_KEY, cellGroupProps } from './types'

const props = defineProps(cellGroupProps)

const { linkChildren } = useChildren(CELL_GROUP_KEY)

linkChildren({ props })
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
