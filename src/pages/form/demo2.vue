<template>
  <page-wraper>
    <wui-form ref="form" :model="model" :reset-on-change="false">
      <wui-cell-group border>
        <wui-input
          label="歪比巴卜"
          label-width="100px"
          prop="name"
          clearable
          v-model="model.name"
          placeholder="请输入歪比巴卜"
          @blur="handleBlur('name')"
          :rules="[{ required: true, message: '请填写歪比巴卜' }]"
        />
        <wui-input
          label="玛卡巴卡单号"
          prop="phoneNumber"
          label-width="100px"
          clearable
          @blur="handleBlur('phoneNumber')"
          v-model="model.phoneNumber"
          placeholder="玛卡巴卡单号"
          :rules="[{ required: true, message: '请填写玛卡巴卡单号' }]"
        />
      </wui-cell-group>
    </wui-form>

    <view class="footer">
      <wui-button type="primary" size="large" block @click="handleSubmit">提交</wui-button>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/wui-design-uni'
import type { FormInstance } from '@/uni_modules/wui-design-uni/components/wui-form/types'
import { reactive, ref } from 'vue'

const model = reactive<{
  name: string
  phoneNumber: string
}>({
  name: '',
  phoneNumber: ''
})

const { success: showSuccess } = useToast()
const form = ref<FormInstance>()

function handleBlur(prop: string) {
  form.value!.validate(prop)
}

function handleSubmit() {
  form
    .value!.validate()
    .then(({ valid }) => {
      if (valid) {
        showSuccess('校验通过')
      }
    })
    .catch((error) => {
      console.log(error, 'error')
    })
}
</script>
<style lang="scss" scoped>
.footer {
  padding: 12px;
}
</style>
