<template>
  <wui-transition
    :show="show"
    name="fade"
    custom-class="wui-overlay"
    :duration="duration"
    :custom-style="`z-index: ${zIndex}; ${customStyle}`"
    @click="handleClick"
    @touchmove.stop.prevent="lockScroll ? noop : ''"
  >
    <slot></slot>
  </wui-transition>
</template>
<script lang="ts">
export default {
  name: 'wui-overlay',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wuiTransition from '../wui-transition/wui-transition.vue'
import { overlayProps } from './types'
// #ifdef H5
import useLockScroll from '../composables/useLockScroll'
// #endif

const props = defineProps(overlayProps)

const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}

function noop() {}

// #ifdef H5
useLockScroll(() => props.show && props.lockScroll)
// #endif
</script>

<style lang="scss">
@import './index.scss';
</style>
