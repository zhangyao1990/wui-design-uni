<template>
  <view :class="rootClass">
    <!-- 前缀插槽 -->
    <slot name="prefix">
      <wui-text :type="props.type" :color="props.color" :size="`${props.fontSize * 0.7}px`" :text="props.prefix"></wui-text>
    </slot>
    <!-- 默认文本插槽 -->
    <slot>
      <wui-text :type="props.type" :color="props.color" :size="`${props.fontSize}px`" :text="timeText"></wui-text>
    </slot>
    <!-- 后缀插槽 -->
    <slot name="suffix">
      <wui-text :type="props.type" :color="props.color" :size="`${props.fontSize * 0.7}px`" :text="props.suffix"></wui-text>
    </slot>
  </view>
</template>

<script lang="ts">
export default {
  name: 'wui-count-to',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wuiText from '../wui-text/wui-text.vue'
import { computed, watch, onMounted } from 'vue'
import { countToProps } from './types'
import { easingFn, isNumber } from '../common/util'
import { useCountDown } from '../composables/useCountDown'
import type { CountDownExpose } from '../wui-count-down/types'

const props = defineProps(countToProps)
const emit = defineEmits(['mounted', 'finish'])

const { start, pause, reset, current } = useCountDown({
  time: props.duration,
  millisecond: true,
  onFinish: () => emit('finish')
})

// 计算根元素的类名
const rootClass = computed(() => {
  return `wui-count-to ${props.customClass}`
})

const timeText = computed(() => {
  return parseFormat(current.value.total)
})

watch([() => props.startVal, () => props.endVal, () => props.duration], resetTime, { immediate: false })

onMounted(() => {
  resetTime()
  emit('mounted')
})

// 重置动画
function resetTime() {
  reset(props.duration)
  if (props.autoStart) {
    start()
  }
}

function parseFormat(remain: number) {
  const { startVal, endVal, duration, useEasing } = props
  const progress = duration - remain // 已经进行的时间
  const isPositive = startVal > endVal // 判断startVal是否大于endVal
  const progressRatio = progress / duration // 计算进度比例

  let currentVal: number

  if (useEasing) {
    // 使用缓动函数计算currentVal
    if (isPositive) {
      currentVal = startVal - easingFn(progress, 0, startVal - endVal, duration) || 0
    } else {
      currentVal = easingFn(progress, startVal, endVal - startVal, duration)
    }
  } else {
    // 不使用缓动函数时的计算方式
    if (isPositive) {
      currentVal = startVal - (startVal - endVal) * progressRatio
    } else {
      currentVal = startVal + (endVal - startVal) * progressRatio
    }
  }
  // 确保currentVal在startVal和endVal之间
  currentVal = isPositive ? Math.max(endVal, currentVal) : Math.min(endVal, currentVal)
  return formatNumber(currentVal)
}

// 格式化数字
function formatNumber(num: any): string {
  if (typeof num !== 'number') {
    num = parseFloat(num)
    if (isNaN(num)) {
      return '0'
    }
  }
  num = num.toFixed(props.decimals)
  const parts = num.split('.')
  let integerPart = parts[0]
  const decimalPart = parts.length > 1 ? props.decimal + parts[1] : ''
  const rgx = /(\d+)(\d{3})/

  if (props.separator && !isNumber(props.separator)) {
    while (rgx.test(integerPart)) {
      integerPart = integerPart.replace(rgx, '$1' + props.separator + '$2')
    }
  }
  return integerPart + decimalPart
}

defineExpose<CountDownExpose>({ start, reset: resetTime, pause })
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
