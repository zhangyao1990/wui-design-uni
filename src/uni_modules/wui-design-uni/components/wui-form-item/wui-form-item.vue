<!--
 * @Author: Mr zhang
 * @Date: 2023-12-14 11:21:58
 * @LastEditTime: 2024-03-15 21:29:33
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: /wui-design-uni/src/uni_modules/wui-design-uni/components/wui-form-item/wui-form-item.vue
 * 记得注释
-->
<template>
  <wui-cell
    custom-class="wui-form-item"
    :required="required"
    :title="label"
    :center="center"
    :border="border"
    :title-width="labelWidth"
    :is-link="isLink"
  >
    <slot></slot>
    <view v-if="errorMessage" class="wui-form-item__error-message">{{ errorMessage }}</view>
  </wui-cell>
</template>
<script lang="ts">
export default {
  name: 'wui-form-item',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { useParent } from '../composables/useParent'
import WuiCell from '../wui-cell/wui-cell.vue'
import { FORM_KEY } from '../wui-form/types'
import { formItemProps } from './types'

const props = defineProps(formItemProps)

const { parent: form, index } = useParent(FORM_KEY)

const errorMessage = computed(() => {
  if (form && props.prop && form.errorMessages && form.errorMessages[props.prop]) {
    return form.errorMessages[props.prop]
  } else {
    return ''
  }
})

const border = computed(() => {
  if (index.value > 0 && form && form.props.border) {
    return true
  } else {
    return false
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
