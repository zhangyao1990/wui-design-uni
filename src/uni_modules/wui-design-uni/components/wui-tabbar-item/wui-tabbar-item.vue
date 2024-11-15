<template>
  <view :class="`wui-tabbar-item ${customClass}`" :style="customStyle" @click="handleClick">
    <wui-badge v-bind="customBadgeProps">
      <view class="wui-tabbar-item__body">
        <slot name="icon" :active="active"></slot>
        <template v-if="!$slots.icon && icon">
          <wui-icon
            :name="icon"
            :custom-style="textStyle"
            :custom-class="`wui-tabbar-item__body-icon ${active ? 'is-active' : 'is-inactive'}`"
          ></wui-icon>
        </template>
        <text v-if="title" :style="textStyle" :class="`wui-tabbar-item__body-title ${active ? 'is-active' : 'is-inactive'}`">
          {{ title }}
        </text>
      </view>
    </wui-badge>
  </view>
</template>
<script lang="ts">
export default {
  name: 'wui-tabbar-item',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>
<script lang="ts" setup>
import wuiBadge from '../wui-badge/wui-badge.vue'
import wuiIcon from '../wui-icon/wui-icon.vue'
import { type CSSProperties, computed } from 'vue'
import { deepAssign, isDef, isUndefined, objToStyle, omitBy } from '../common/util'
import { useParent } from '../composables/useParent'
import { TABBAR_KEY } from '../wui-tabbar/types'
import { tabbarItemProps } from './types'
import type { BadgeProps } from '../wui-badge/types'

const props = defineProps(tabbarItemProps)

const { parent: tabbar, index } = useParent(TABBAR_KEY)

const customBadgeProps = computed(() => {
  const badgeProps: Partial<BadgeProps> = deepAssign(
    isDef(props.badgeProps) ? omitBy(props.badgeProps, isUndefined) : {},
    omitBy(
      {
        max: props.max,
        isDot: props.isDot,
        modelValue: props.value
      },
      isUndefined
    )
  )
  if (!isDef(badgeProps.max)) {
    badgeProps.max = 99
  }
  return badgeProps
})

const textStyle = computed(() => {
  const style: CSSProperties = {}
  if (tabbar) {
    if (active.value && tabbar.props.activeColor) {
      style['color'] = tabbar.props.activeColor
    }
    if (!active.value && tabbar.props.inactiveColor) {
      style['color'] = tabbar.props.inactiveColor
    }
  }

  return `${objToStyle(style)}`
})

const active = computed(() => {
  const name = isDef(props.name) ? props.name : index.value
  if (tabbar) {
    if (tabbar.props.modelValue === name) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
})

/**
 * 点击tabbar选项
 */
function handleClick() {
  const name: string | number = isDef(props.name) ? props.name : index.value
  tabbar && tabbar.setChange({ name })
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
