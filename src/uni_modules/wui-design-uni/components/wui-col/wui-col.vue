<!--
 * @Author: Mr zhang
 * @Date: 2023-06-13 11:34:35
 * @LastEditTime: 2024-03-15 16:49:17
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: \wui-design-uni\src\uni_modules\wui-design-uni\components\wui-col\wui-col.vue
 * 记得注释
-->
<template>
  <view :class="['wui-col', span && 'wui-col__' + span, offset && 'wui-col__offset-' + offset, customClass]" :style="style">
    <!-- 每一列 -->
    <slot />
  </view>
</template>
<script lang="ts">
export default {
  name: 'wui-col',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import { ref } from 'vue'
import { useParent } from '../composables/useParent'
import { ROW_KEY } from '../wui-row/types'
import { colProps } from './types'

const props = defineProps(colProps)

const style = ref<string>('')

const { parent: row } = useParent(ROW_KEY)

const gutter = computed(() => {
  if (row) {
    return row.props.gutter || 0
  } else {
    return 0
  }
})

watch([() => props.span, () => props.offset], () => {
  check()
})

watch(
  () => gutter.value,
  (newVal) => {
    setGutter(newVal || 0)
  },
  { deep: true, immediate: true }
)

function check() {
  const { span, offset } = props
  if (span < 0 || offset < 0) {
    console.error('[wui-design] warning(wui-col): attribute span/offset must be greater than or equal to 0')
  }
}

function setGutter(gutter: number) {
  const padding = `${gutter / 2}px`
  const customStyle = gutter > 0 ? `padding-left: ${padding}; padding-right: ${padding};background-clip: content-box;` : ''

  if (customStyle !== style.value) {
    style.value = customStyle
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
