<template>
  <view
    :class="`wui-key-wrapper ${wider ? 'wui-key-wrapper--wider' : ''}`"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <view :class="keyClass">
      <wui-loading custom-class="wui-key__loading-icon" v-if="props.loading" />
      <template v-if="type === 'delete'">
        <template v-if="text">
          {{ text }}
        </template>
        <wui-icon v-else custom-class="wui-key__icon" name="keyboard-delete" size="22px"></wui-icon>
      </template>
      <template v-else-if="type === 'extra'">
        <template v-if="text">
          {{ text }}
        </template>
        <wui-icon v-else custom-class="wui-key__icon" name="keyboard-collapse" size="22px"></wui-icon>
      </template>
      <template v-else>{{ text }}</template>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  name: 'wui-key',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useTouch } from '../../composables/useTouch'
import { keyProps } from './types'

const props = defineProps(keyProps)
const emit = defineEmits(['press'])

const touch = useTouch()
const active = ref<boolean>(false)

const keyClass = computed(() => {
  return `wui-key ${props.large ? 'wui-key--large' : ''} ${props.type === 'delete' ? 'wui-key--delete' : ''} ${
    props.type === 'close' ? 'wui-key--close' : ''
  }`
})

function onTouchStart(event: TouchEvent) {
  touch.touchStart(event)
  active.value = true
}

function onTouchMove(event: TouchEvent) {
  touch.touchMove(event)
  if (touch.direction.value) {
    active.value = false
  }
}

function onTouchEnd() {
  if (active.value) {
    active.value = false
    emit('press', props.text, props.type)
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
