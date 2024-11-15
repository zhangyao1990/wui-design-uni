<!--
 * @Author: Mr zhang
 * @Date: 2024-11-09 12:35:25
 * @LastEditTime: 2024-11-09 15:01:32
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: /wui-design-uni/src/uni_modules/wui-design-uni/components/wui-loadmore/wui-loadmore.vue
 * 记得注释
-->
<template>
  <view :class="['wui-loadmore', customClass]" :style="customStyle" @click="reload">
    <wui-divider v-if="state === 'finished'">{{ finishedText || translate('finished') }}</wui-divider>
    <block v-if="state === 'error'">
      <text class="wui-loadmore__text">{{ errorText || translate('error') }}</text>
      <text class="wui-loadmore__text is-light">{{ translate('retry') }}</text>
      <wui-icon name="refresh" custom-class="wui-loadmore__refresh" />
    </block>
    <block v-if="state === 'loading'">
      <wui-loading v-bind="customLoadingProps" />
      <text class="wui-loadmore__text">{{ loadingText || translate('loading') }}</text>
    </block>
  </view>
</template>

<script lang="ts">
export default {
  name: 'wui-loadmore',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wuiDivider from '../wui-divider/wui-divider.vue'
import wuiLoading from '../wui-loading/wui-loading.vue'
import wuiIcon from '../wui-icon/wui-icon.vue'
import { computed, ref } from 'vue'
import { useTranslate } from '../composables/useTranslate'
import { loadmoreProps, type LoadMoreState } from './types'
import type { LoadingProps } from '../wui-loading/types'
import { isDef, isUndefined, omitBy } from '../common/util'

const customLoadingProps = computed(() => {
  const loadingProps: Partial<LoadingProps> = isDef(props.loadingProps) ? omitBy(props.loadingProps, isUndefined) : {}
  loadingProps.customClass = `wui-loadmore__loading ${loadingProps.customClass || ''}`
  return loadingProps
})

const props = defineProps(loadmoreProps)
const emit = defineEmits(['reload'])

const { translate } = useTranslate('loadmore')

const currentState = ref<LoadMoreState | null>(null)

function reload() {
  if (props.state !== 'error') return
  currentState.value = 'loading'
  emit('reload')
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
