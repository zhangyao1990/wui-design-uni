<template>
  <page-wraper show-dark-mode>
    <wui-message-box />
    <wui-toast />
    <wui-action-sheet v-model="showAction" :actions="actions" />

    <form @submit="formSubmit">
      <wui-cell-group custom-class="group" title="基础信息" border>
        <wui-input
          label="优惠券名称"
          label-width="100px"
          :maxlength="20"
          show-word-limit
          name="couponName"
          required
          suffix-icon="warn-bold"
          clearable
          v-model="couponName"
          placeholder="请输入优惠券名称"
          @change="handleCouponName"
          @clicksuffixicon="handleIconClick"
        />
        <wui-select-picker
          label="推广平台"
          label-width="100px"
          name="platform"
          v-model="platform"
          :columns="platformList"
          placeholder="请选择推广平台"
          @confirm="handlePlatform"
        />
        <wui-picker label="优惠方式" label-width="100px" name="promotion" align-right v-model="promotion" :columns="promotionlist" />
        <wui-cell title="券面额" required title-width="100px" custom-value-class="cell-left">
          <view style="text-align: left">
            <view class="inline-txt" style="margin-left: 0">满</view>
            <wui-input
              no-border
              custom-style="display: inline-block; width: 70px; vertical-align: middle"
              placeholder="请输入金额"
              v-model="threshold"
              name="threshold"
              @change="handleThreshold"
            />
            <view class="inline-txt">减</view>
            <wui-input
              no-border
              custom-style="display: inline-block; width: 70px; vertical-align: middle"
              placeholder="请输入金额"
              v-model="price"
              name="price"
              @change="handlePrice"
            />
          </view>
        </wui-cell>
      </wui-cell-group>
      <wui-cell-group custom-class="group" title="时间和地址" border>
        <wui-datetime-picker label="时间" label-width="100px" name="date" v-model="date" @confirm="handleDate" />
        <wui-col-picker
          label="地址"
          label-width="100px"
          name="address"
          v-model="address"
          :columns="area"
          :column-change="areaChange"
          @confirm="handleAddress"
        />
      </wui-cell-group>
      <wui-cell-group custom-class="group" title="其他信息" border>
        <wui-input
          label="活动细则"
          label-width="100px"
          v-model="content"
          :maxlength="300"
          show-word-limit
          placeholder="请输入活动细则信息"
          clearable
          name="content"
          @change="handleContent"
        />
        <wui-cell title="发货数量" center>
          <wui-input-number v-model="count" name="count" @change="handleCount" />
        </wui-cell>
        <wui-cell title="这里显示的是多文字标题包含非常的文字" title-width="240px" center>
          <wui-switch v-model="switchVal" name="switchVal" @change="handleSwitch" />
        </wui-cell>
        <wui-input
          label="歪比巴卜"
          label-width="100px"
          name="cardId"
          suffix-icon="camera"
          placeholder="请输入歪比巴卜"
          clearable
          v-model="cardId"
          @change="handleCardId"
        />
        <wui-input label="玛卡巴卡" label-width="100px" name="phone" placeholder="请输入玛卡巴卡" clearable v-model="phone" @change="handlePhone" />
      </wui-cell-group>
      <view class="tip">
        <wui-checkbox v-model="read" name="read" @change="handleRead" custom-label-class="label-class">
          已阅读并同意
          <text style="color: #4d80f0">《巴拉巴拉吧啦协议》</text>
        </wui-checkbox>
      </view>
      <view class="footer">
        <wui-button block round size="large">提交</wui-button>
      </view>
    </form>
  </page-wraper>
</template>
<script setup lang="ts">
import { useToast, useMessage } from '@/uni_modules/wui-design-uni'
import type { ColPickerColumnChangeOption } from '@/uni_modules/wui-design-uni/components/wui-col-picker/types'
import { ref } from 'vue'
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()

const showAction = ref<boolean>(false)
const actions = ref<any[]>([])

const couponName = ref<string>('')
const couponNameErr = ref<boolean>(false)
const platform = ref<any>([])
const platformList = ref<any>([
  {
    value: '1',
    label: '京东'
  },
  {
    value: '2',
    label: '开普勒'
  },
  {
    value: '3',
    label: '手Q'
  },
  {
    value: '4',
    label: '微信'
  },
  {
    value: '5',
    label: '1号店'
  },
  {
    value: '6',
    label: '十元街'
  },
  {
    value: '7',
    label: '京东极速版'
  }
])
const promotion = ref<string>('1')
const promotionlist = ref<any[]>([
  {
    value: '1',
    label: '满减'
  },
  {
    value: '2',
    label: '无门槛'
  }
])
const threshold = ref<string>('')
const price = ref<string>('')
const date = ref<Date>(new Date())
const address = ref<any[]>([])

const count = ref<number>(1)

const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  })
])
const areaChange = ({ selectedItem, resolve, finish }: ColPickerColumnChangeOption) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text
        }
      })
    )
  } else {
    finish()
  }
}
const content = ref<string>('')
const coun = ref<number>(1)
const read = ref<boolean>(false)
const switchVal = ref<boolean>(true)
const cardId = ref<string>('')
const phone = ref<string>('')

const toast = useToast()
const messageBox = useMessage()

function showActions() {
  showAction.value = true
  actions.value = [
    {
      name: '选项1'
    },
    {
      name: '选项2'
    },
    {
      name: '选项3',
      subname: '描述信息'
    }
  ]
}

function handleCouponName({ value }: any) {
  console.log(value)

  couponNameErr.value = false
}
function handlePlatform({ value }: any) {
  console.log(value)
}
function handleThreshold({ value }: any) {
  console.log(value)
}
function handlePrice({ value }: any) {
  console.log(value)
}
function handleAddress({ value }: any) {
  console.log(value)
}
function handleContent({ value }: any) {
  console.log(value)
}
function handleCount({ value }: any) {
  console.log(value)
}
function handleSwitch({ value }: any) {
  console.log(value)
}
function handleRead({ value }: any) {
  read.value = value
}
function handleCardId({ value }: any) {
  console.log(value)
}
function handlePhone({ value }: any) {
  console.log(value)
}
function formSubmit(event: any) {
  console.log(event)

  if (!couponName.value) {
    toast.error('请填写优惠券名称')
    return
  }
  messageBox.alert('提交成功')
}
function handleIconClick() {
  toast.info('优惠券提示信息')
}
function handleDate({ value }: any) {
  console.log(value)
}
</script>
<style lang="scss" scoped>
.wui-theme-dark {
  .inline-txt {
    color: $-dark-color;
  }
}
.custom-value {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  white-space: nowrap;
}
.inline-txt {
  display: inline-block;
  font-size: 14px;
  margin: 0 8px;
  color: rgba(0, 0, 0, 0.45);
  vertical-align: middle;
}
:deep(.group) {
  margin-top: 12px;
}
.tip {
  margin: 10px 15px 21px;
  color: #999;
  font-size: 12px;
}
.footer {
  padding: 0 25px 21px;
}
:deep(.label-class) {
  color: #999 !important;
  font-size: 12px !important;
}
</style>
