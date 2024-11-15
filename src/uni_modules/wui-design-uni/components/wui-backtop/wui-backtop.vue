<template>
  <wui-transition :show="show" name="fade">
    <view
      :class="`wui-backtop ${customClass} is-${shape}`"
      :style="`z-index: ${zIndex}; bottom: ${bottom}px; right: ${right}px; ${customStyle}`"
      @click="handleBacktop"
    >
      <slot v-if="$slots.default"></slot>
      <wui-icon v-else custom-class="wui-backtop__backicon" name="backtop" :custom-style="iconStyle" />
    </view>
  </wui-transition>
</template>

<script lang="ts">
export default {
  name: 'wui-backtop',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wuiTransition from '../wui-transition/wui-transition.vue'
import wuiIcon from '../wui-icon/wui-icon.vue'
import { computed } from 'vue'
import { backtopProps } from './types'

const props = defineProps(backtopProps)

const show = computed(() => props.scrollTop > props.top)

function handleBacktop() {
  uni.pageScrollTo({
    scrollTop: 0,
    duration: props.duration
  })
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
