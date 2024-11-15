<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-checkbox v-model="check1">沃特</wui-checkbox>
    </demo-block>

    <demo-block title="修改形状: square">
      <wui-checkbox v-model="check2" shape="square">沃特</wui-checkbox>
    </demo-block>

    <demo-block title="修改形状: button">
      <wui-checkbox v-model="check3" shape="button">沃特</wui-checkbox>
    </demo-block>

    <demo-block title="修改选中颜色">
      <wui-checkbox v-model="check4" checked-color="rgb(52, 209, 157)">沃特</wui-checkbox>
    </demo-block>

    <demo-block title="禁用状态">
      <view style="margin-bottom: 10px">
        <wui-checkbox-group v-model="value1" disabled>
          <wui-checkbox :modelValue="1">沃特</wui-checkbox>
          <wui-checkbox :modelValue="2" :disabled="false">商家后台</wui-checkbox>
          <wui-checkbox :modelValue="3" shape="square">沃特</wui-checkbox>
          <wui-checkbox :modelValue="4" shape="square">商家后台</wui-checkbox>
        </wui-checkbox-group>
      </view>
      <wui-checkbox-group v-model="value2" disabled>
        <wui-checkbox :modelValue="1" shape="button">沃特</wui-checkbox>
        <wui-checkbox :modelValue="2" shape="button">商家后台</wui-checkbox>
      </wui-checkbox-group>
    </demo-block>

    <demo-block :title="`修改 true-value 和 false-value ${value3}`">
      <wui-checkbox v-model="value3" true-value="沃特" false-value="商家后台" @change="handleChange1">复选框</wui-checkbox>
    </demo-block>

    <demo-block title="同行展示">
      <wui-checkbox-group v-model="value4" inline>
        <wui-checkbox :modelValue="1">沃特</wui-checkbox>
        <wui-checkbox :modelValue="2">商家后台</wui-checkbox>
      </wui-checkbox-group>
    </demo-block>

    <demo-block title="复选框组">
      <wui-checkbox-group v-model="value5">
        <wui-checkbox :modelValue="1">沃特</wui-checkbox>
        <wui-checkbox :modelValue="2">商家后台</wui-checkbox>
      </wui-checkbox-group>
    </demo-block>

    <demo-block title="表单模式---复选框组" transparent>
      <wui-checkbox-group v-model="value6" cell>
        <wui-checkbox :modelValue="1">沃特</wui-checkbox>
        <wui-checkbox :modelValue="2">商家后台</wui-checkbox>
      </wui-checkbox-group>
    </demo-block>

    <demo-block title="表单模式---复选框按钮组" transparent>
      <wui-checkbox-group v-model="value7" cell shape="button">
        <wui-checkbox :modelValue="1" disabled>选项一</wui-checkbox>
        <wui-checkbox :modelValue="2">选项二</wui-checkbox>
        <wui-checkbox :modelValue="3">选项三</wui-checkbox>
        <wui-checkbox :modelValue="4">选项四</wui-checkbox>
        <wui-checkbox :modelValue="5">选项五</wui-checkbox>
        <wui-checkbox :modelValue="6">选项六</wui-checkbox>
        <wui-checkbox :modelValue="7">选项七</wui-checkbox>
      </wui-checkbox-group>
    </demo-block>

    <demo-block title="设置最小选中数量和最大选中数量" transparent>
      <wui-checkbox-group v-model="value8" :min="1" :max="3" cell>
        <wui-checkbox :modelValue="1">京东</wui-checkbox>
        <wui-checkbox :modelValue="2">沃特</wui-checkbox>
        <wui-checkbox :modelValue="3">商家后台</wui-checkbox>
        <wui-checkbox :modelValue="4">营销中心</wui-checkbox>
      </wui-checkbox-group>
    </demo-block>

    <demo-block title="大尺寸">
      <wui-checkbox-group v-model="value9" inline size="large">
        <wui-checkbox modelValue="jingmai">沃特</wui-checkbox>
        <wui-checkbox modelValue="shop">商家后台</wui-checkbox>
      </wui-checkbox-group>
      <wui-checkbox-group v-model="value10" size="large" class="group">
        <wui-checkbox modelValue="jingmai">沃特</wui-checkbox>
        <wui-checkbox modelValue="shop">商家后台</wui-checkbox>
      </wui-checkbox-group>
    </demo-block>

    <demo-block title="结合Cell使用" transparent>
      <wui-cell-group border>
        <wui-checkbox-group v-model="value10" size="large">
          <wui-cell title="点赞" center clickable @click="handleCheck1">
            <view @click.stop="noop">
              <wui-checkbox model-value="1" ref="checkBox1" custom-style="margin:0;"></wui-checkbox>
            </view>
          </wui-cell>
          <wui-cell title="投币" center clickable @click="handleCheck2">
            <view @click.stop="noop">
              <wui-checkbox model-value="2" ref="checkBox2" custom-style="margin:0;"></wui-checkbox>
            </view>
          </wui-cell>
          <wui-cell title="一键三连" center clickable @click="handleCheck3">
            <view @click.stop="noop">
              <wui-checkbox model-value="3" ref="checkBox3" custom-style="margin:0;"></wui-checkbox>
            </view>
          </wui-cell>
        </wui-checkbox-group>
      </wui-cell-group>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import type { CheckboxInstance } from '@/uni_modules/wui-design-uni/components/wui-checkbox/types'
import { ref } from 'vue'

const checkBox1 = ref<CheckboxInstance>()
const checkBox2 = ref<CheckboxInstance>()
const checkBox3 = ref<CheckboxInstance>()

function handleCheck1() {
  checkBox1.value && checkBox1.value.toggle()
}

function handleCheck2() {
  checkBox2.value && checkBox2.value.toggle()
}
function handleCheck3() {
  checkBox3.value && checkBox3.value.toggle()
}

function noop() {}

const check1 = ref<boolean>(true)
const check2 = ref<boolean>(true)
const check3 = ref<boolean>(true)
const check4 = ref<boolean>(true)
const check5 = ref<boolean>(true)
const check6 = ref<boolean>(true)

const value0 = ref<number[]>([1, 2, 3])

const value1 = ref<number[]>([1, 3])
const value2 = ref<number[]>([1])
const value3 = ref<string>('沃特')

const value4 = ref<number[]>([1])
const value5 = ref<number[]>([])

const value6 = ref<number[]>([1])
const value7 = ref<number[]>([1])
const value8 = ref<number[]>([1])
const value9 = ref<string[]>([])
const value10 = ref<string[]>([])

function handleChange1(e: any) {
  console.log(e)
}
</script>
<style lang="scss" scoped>
.group {
  display: block;
  margin-top: 10px;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}
</style>
