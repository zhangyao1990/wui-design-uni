<template>
  <view :class="`wui-tooltip ${customClass}`" :style="customStyle" id="tooltip" @click.stop="popover.noop">
    <!-- 用于为渲染获取宽高的元素 -->
    <view class="wui-tooltip__pos wui-tooltip__hidden" id="pos">
      <view class="wui-tooltip__container custom-pop">
        <view v-if="!useContentSlot" class="wui-tooltip__inner">{{ content }}</view>
      </view>
    </view>
    <wui-transition custom-class="wui-tooltip__pos" :custom-style="popover.popStyle.value" :show="showTooltip" name="fade" :duration="200">
      <view class="wui-tooltip__container custom-pop">
        <view v-if="visibleArrow" :class="`wui-tooltip__arrow ${popover.arrowClass.value} ${customArrow}`" :style="popover.arrowStyle.value"></view>
        <!-- 普通模式 -->
        <view v-if="!useContentSlot" class="wui-tooltip__inner">{{ content }}</view>
        <!-- 用户自定义样式 -->
        <slot name="content" v-else />
      </view>
      <wui-icon v-if="showClose" name="close" custom-class="wui-tooltip__close-icon" @click="toggle"></wui-icon>
    </wui-transition>
    <view @click="toggle" class="wui-tooltip__target" id="target">
      <slot />
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'wui-tooltip',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wuiIcon from '../wui-icon/wui-icon.vue'
import wuiTransition from '../wui-transition/wui-transition.vue'
import { getCurrentInstance, inject, onBeforeMount, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { usePopover } from '../composables/usePopover'
import { closeOther, pushToQueue, removeFromQueue } from '../common/clickoutside'
import { type Queue, queueKey } from '../composables/useQueue'
import { tooltipProps, type TooltipExpose } from './types'

const props = defineProps(tooltipProps)
const emit = defineEmits(['update:modelValue', 'menuclick', 'change', 'open', 'close'])

const popover = usePopover()
const queue = inject<Queue | null>(queueKey, null)
const selector: string = 'tooltip'
const { proxy } = getCurrentInstance() as any
const showTooltip = ref<boolean>(false) // 控制tooltip显隐

watch(
  () => props.content,
  (newVal) => {
    if (newVal === null || newVal === undefined) {
      // eslint-disable-next-line prettier/prettier
      console.error('[wui-design] warning(wui-tooltip): content can\'t be null or undefined')
    }
  }
)

watch(
  () => props.placement,
  () => {
    popover.init(props.placement, props.visibleArrow, selector)
  }
)

watch(
  () => props.modelValue,
  (newValue) => {
    showTooltip.value = newValue
  }
)

watch(
  () => showTooltip.value,
  (newValue) => {
    if (newValue) {
      popover.control(props.placement, props.offset)
      if (queue && queue.closeOther) {
        queue.closeOther(proxy)
      } else {
        closeOther(proxy)
      }
    }
    popover.showStyle.value = newValue ? 'display: inline-block;' : 'display: none;'
    emit('change', { show: newValue })
    emit(`${newValue ? 'open' : 'close'}`)
  }
)

onMounted(() => {
  popover.init(props.placement, props.visibleArrow, selector)
})

onBeforeMount(() => {
  if (queue && queue.pushToQueue) {
    queue.pushToQueue(proxy)
  } else {
    pushToQueue(proxy)
  }
  popover.showStyle.value = props.modelValue ? 'opacity: 1;' : 'opacity: 0;'
})

onBeforeUnmount(() => {
  if (queue && queue.removeFromQueue) {
    queue.removeFromQueue(proxy)
  } else {
    removeFromQueue(proxy)
  }
})

function toggle() {
  if (props.disabled) return
  updateModelValue(!showTooltip.value)
}

function open() {
  updateModelValue(true)
}

function close() {
  updateModelValue(false)
}

function updateModelValue(value: boolean) {
  showTooltip.value = value
  emit('update:modelValue', value)
}

defineExpose<TooltipExpose>({
  open,
  close
})
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
