<template>
  <page-wraper>
    <wui-form ref="form" :model="model">
      <wui-cell-group border>
        <wui-input
          label="歪比巴卜名"
          label-width="100px"
          prop="name"
          clearable
          v-model="model.name"
          placeholder="请输入歪比巴卜"
          :rules="[{ required: true, message: '请填写歪比巴卜' }]"
        />
        <wui-input
          v-for="(item, index) in model.phoneNumbers"
          :key="item.key"
          :label="'玛卡巴卡单号' + index"
          :prop="'phoneNumbers.' + index + '.value'"
          label-width="100px"
          clearable
          v-model="item.value"
          placeholder="玛卡巴卡单号"
          :rules="[{ required: true, message: '请填写玛卡巴卡单号' + index }]"
        />

        <wui-cell title-width="0px">
          <view class="footer">
            <wui-button size="small" type="info" plain @click="addPhone">添加</wui-button>
            <wui-button size="small" type="info" plain @click="removePhone">删除</wui-button>
            <wui-button size="small" type="info" plain @click="reset">重置</wui-button>
            <wui-button type="primary" size="small" @click="submit">提交</wui-button>
          </view>
        </wui-cell>
      </wui-cell-group>
    </wui-form>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/wui-design-uni'
import type { FormInstance } from '@/uni_modules/wui-design-uni/components/wui-form/types'
import { reactive, ref } from 'vue'

interface PhoneItem {
  key: number
  value: string
}

const model = reactive<{
  name: string
  phoneNumbers: PhoneItem[]
}>({
  name: '',
  phoneNumbers: [
    {
      key: Date.now(),
      value: ''
    }
  ]
})

const { success: showSuccess } = useToast()
const form = ref<FormInstance>()

const removePhone = () => {
  model.phoneNumbers.splice(model.phoneNumbers.length - 1, 1)
}

const addPhone = () => {
  model.phoneNumbers.push({
    key: Date.now(),
    value: ''
  })
}

const reset = () => {
  form.value!.reset()
}

const submit = () => {
  form.value!.validate().then(({ valid, errors }) => {
    if (valid) {
      showSuccess('校验通过')
    }
  })
}
</script>
<style lang="scss" scoped>
.footer {
  text-align: left;
  :deep(.wui-button) {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
}
</style>
