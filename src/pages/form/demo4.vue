<template>
  <page-wraper>
    <wui-form ref="form" :model="model" errorType="toast">
      <wui-cell-group border>
        <wui-input
          label="歪比巴卜"
          label-width="100px"
          prop="value1"
          clearable
          v-model="model.value1"
          placeholder="请输入歪比巴卜"
          :rules="[{ required: true, message: '请填写歪比巴卜' }]"
        />
        <wui-input
          label="沙卡拉卡"
          label-width="100px"
          prop="value2"
          show-password
          clearable
          v-model="model.value2"
          placeholder="请输入沙卡拉卡"
          :rules="[{ required: true, message: '请填写沙卡拉卡' }]"
        />
      </wui-cell-group>
      <view class="footer">
        <wui-button type="primary" size="large" @click="handleSubmit" block>提交</wui-button>
      </view>
    </wui-form>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/wui-design-uni'
import type { FormInstance } from '@/uni_modules/wui-design-uni/components/wui-form/types'
import { reactive, ref } from 'vue'

const { success: showSuccess } = useToast()
const model = reactive<{
  value1: string
  value2: string
}>({
  value1: '',
  value2: ''
})

const form = ref<FormInstance>()

function handleSubmit() {
  form
    .value!.validate()
    .then(({ valid, errors }) => {
      if (valid) {
        showSuccess({
          msg: '校验通过'
        })
      }
    })
    .catch((error) => {
      console.log(error, 'error')
    })
}
</script>
