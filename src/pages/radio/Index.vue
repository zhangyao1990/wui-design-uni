<template>
  <page-wraper>
    <demo-block title="基本用法">
      <view>
        1、内容项在3项以内，且有比较重要的信息备选（如付款类型选择等）可考虑采用圆形组件。因为会跟圆形复选框容易混淆，且会造成当前表单页页面结构不统一，
        <text style="color: #f0883a">一般情况不建议使用点状单选。</text>
      </view>
      <view style="margin-bottom: 10px">
        2、单选框基本使用未对高度进行扩充，
        <text style="color: #f0883a">一般情况建议使用表单--单选组。</text>
      </view>
      <wui-radio-group v-model="value0" @change="change">
        <wui-radio :value="1">单选框1</wui-radio>
        <wui-radio :value="2">单选框2</wui-radio>
      </wui-radio-group>
    </demo-block>

    <demo-block title="修改形状--button">
      <wui-radio-group shape="button" v-model="value1" @change="change">
        <wui-radio :value="1">选项1</wui-radio>
        <wui-radio :value="2">选项2</wui-radio>
      </wui-radio-group>
    </demo-block>

    <demo-block title="修改形状--dot">
      <wui-radio-group shape="dot" v-model="value2" @change="change">
        <wui-radio :value="1">选项1</wui-radio>
        <wui-radio :value="2">选项2</wui-radio>
      </wui-radio-group>
    </demo-block>

    <demo-block title="表单---单选组" transparent>
      <wui-radio-group cell v-model="value3" @change="change">
        <wui-radio :value="1">选项1</wui-radio>
        <wui-radio :value="2">选项2</wui-radio>
      </wui-radio-group>
    </demo-block>

    <demo-block title="表单--单选按钮组" transparent>
      <wui-radio-group v-model="value4" cell shape="button">
        <wui-radio :value="1">选项一</wui-radio>
        <wui-radio :value="2">选项二</wui-radio>
        <wui-radio :value="3">选项三</wui-radio>
        <wui-radio :value="4">选项四</wui-radio>
        <wui-radio :value="5">选项五</wui-radio>
        <wui-radio :value="6">选项六</wui-radio>
        <wui-radio :value="7">选项七</wui-radio>
      </wui-radio-group>
    </demo-block>

    <demo-block title="同行展示">
      <wui-radio-group v-model="value5" inline>
        <wui-radio :value="1">单选框1</wui-radio>
        <wui-radio :value="2">单选框2</wui-radio>
      </wui-radio-group>
      <view class="divider"></view>
      <wui-radio-group v-model="value6" inline shape="dot">
        <wui-radio :value="1">单选框1</wui-radio>
        <wui-radio :value="2">单选框2</wui-radio>
      </wui-radio-group>
    </demo-block>

    <demo-block title="修改选中颜色">
      <wui-radio-group v-model="value7" @change="change" checked-color="#fa4350">
        <wui-radio :value="1">选项1</wui-radio>
        <wui-radio :value="2">选项2</wui-radio>
      </wui-radio-group>

      <wui-radio-group shape="dot" v-model="value12" @change="change" checked-color="#fa4350">
        <wui-radio :value="1">选项1</wui-radio>
        <wui-radio :value="2">选项2</wui-radio>
      </wui-radio-group>
    </demo-block>

    <demo-block title="禁用">
      <wui-radio-group v-model="value1" disabled shape="dot">
        <wui-radio :value="1">选项1</wui-radio>
        <wui-radio :value="2">选项2</wui-radio>
      </wui-radio-group>
      <view class="divider"></view>
      <wui-radio-group v-model="value1" disabled>
        <wui-radio :value="1">选项1</wui-radio>
        <wui-radio :value="2">选项2</wui-radio>
      </wui-radio-group>
      <view class="divider"></view>
      <wui-radio-group v-model="value1" disabled shape="button">
        <wui-radio :value="1">选项1</wui-radio>
        <wui-radio :value="2">选项2</wui-radio>
      </wui-radio-group>
    </demo-block>

    <demo-block title="大尺寸">
      <wui-radio-group v-model="value8" size="large">
        <wui-radio :value="1">单选框1</wui-radio>
        <wui-radio :value="2">单选框2</wui-radio>
      </wui-radio-group>
      <view class="divider"></view>
      <wui-radio-group v-model="value9" size="large" shape="dot">
        <wui-radio :value="1">单选框1</wui-radio>
        <wui-radio :value="2">单选框2</wui-radio>
      </wui-radio-group>
      <view class="divider"></view>
      <wui-radio-group v-model="value10" size="large" inline custom-class="group">
        <wui-radio :value="1">单选框1</wui-radio>
        <wui-radio :value="2">单选框2</wui-radio>
      </wui-radio-group>
    </demo-block>

    <demo-block title="radio的props比radioGroup的优先级高">
      <wui-radio-group hape="button" disabled checked-color="#fa4350" v-model="value11" @change="change">
        <wui-radio :value="1" checked-color="#000" :disabled="false">选项1</wui-radio>
        <wui-radio :value="2" :disabled="false">选项2</wui-radio>
        <wui-radio :value="3">选项3</wui-radio>
      </wui-radio-group>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<number>(1)
const value0 = ref<number>(1)
const value1 = ref<number>(1)
const value2 = ref<number>(1)
const value3 = ref<number>(1)
const value4 = ref<number>(1)
const value5 = ref<number>(1)
const value6 = ref<number>(1)
const value7 = ref<number>(1)
const value8 = ref<number>(1)
const value9 = ref<number>(1)
const value10 = ref<number>(1)
const value11 = ref<number>(1)
const value12 = ref<number>(1)

function change(e: any) {
  console.log(e)
}
</script>
<style lang="scss" scoped>
.divider {
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}
</style>
