<template>
  <page-wraper>
    <wui-toast />
    <view style="overflow: hidden" @click.stop="closeOutside">
      <demo-block title="基本用法">
        <view class="top">
          <wui-tooltip placement="bottom-start" content="bottom-start 提示文字" @change="handleChange1">
            <wui-button :round="false">bottom-start</wui-button>
          </wui-tooltip>
          <wui-tooltip placement="bottom" content="bottom 提示文字" @change="handleChange2">
            <wui-button :round="false">bottom</wui-button>
          </wui-tooltip>
          <wui-tooltip placement="bottom-end" content="bottom-end 提示文字" @change="handleChange3">
            <wui-button :round="false">bottom-end</wui-button>
          </wui-tooltip>
        </view>
        <view class="left">
          <wui-tooltip placement="right-start" content="right-start 提示文字" @change="handleChange4">
            <wui-button :round="false">right-start</wui-button>
          </wui-tooltip>
          <wui-tooltip placement="right" content="right 提示文字" customStyle="margin: 20px 0" @change="handleChange5">
            <wui-button :round="false">right</wui-button>
          </wui-tooltip>
          <wui-tooltip placement="right-end" content="right-end 提示文字" @change="handleChange6">
            <wui-button :round="false">right-end</wui-button>
          </wui-tooltip>
        </view>
        <view class="right">
          <wui-tooltip placement="left-start" content="left-start 提示文字" @change="handleChange7">
            <wui-button :round="false">
              left-start
              <wui-icon name="setting" />
            </wui-button>
          </wui-tooltip>
          <wui-tooltip placement="left" content="left 提示文字" customStyle="margin: 20px 0" @change="handleChange8">
            <wui-button :round="false">left</wui-button>
          </wui-tooltip>
          <wui-tooltip placement="left-end" content="left-end 提示文字" @change="handleChange9">
            <wui-button :round="false">left-end</wui-button>
          </wui-tooltip>
        </view>
        <view class="bottom">
          <wui-tooltip placement="top-start" content="top-start 提示文字" @change="handleChange10">
            <wui-button :round="false">top-start</wui-button>
          </wui-tooltip>
          <wui-tooltip placement="top" content="top 提示文字" @change="handleChange11">
            <wui-button :round="false">top</wui-button>
          </wui-tooltip>
          <wui-tooltip placement="top-end" content="top-end 提示文字" @change="handleChange12">
            <wui-button :round="false">top-end</wui-button>
          </wui-tooltip>
        </view>
      </demo-block>
      <demo-block title="显示关闭按钮">
        <view class="demo-left">
          <wui-tooltip content="显示关闭按钮" placement="right" show-close @change="handleChange13">
            <wui-button :round="false">显示关闭按钮</wui-button>
          </wui-tooltip>
        </view>
      </demo-block>
      <demo-block title="多行文本">
        <view class="demo-left lines-demo">
          <wui-tooltip placement="right" use-content-slot @change="handleChange14">
            <wui-button :round="false">多行文本</wui-button>
            <template #content>
              <view class="lines-content">
                <view>多行文本1</view>
                <view>多行文本2</view>
                <view>多行文本3</view>
              </view>
            </template>
          </wui-tooltip>
        </view>
      </demo-block>
      <demo-block title="控制显隐">
        <view @click.stop="control">
          <wui-button plain size="small" class="button-control">{{ show15 ? '关闭' : '打开' }}</wui-button>
        </view>
        <view class="demo-left demo-control">
          <wui-tooltip placement="top" content="控制显隐" v-model="show15">
            <wui-button :round="false">top</wui-button>
          </wui-tooltip>
        </view>
      </demo-block>
      <demo-block title="绑定change事件">
        <view class="demo-left">
          <wui-tooltip placement="right-end" :content="content" @open="onShow" @close="onHide" @change="handleChange16">
            <wui-button :round="false">事件</wui-button>
          </wui-tooltip>
        </view>
      </demo-block>
      <demo-block title="禁用">
        <view class="demo-left">
          <wui-tooltip placement="right-end" content="禁用" disabled @change="handleChange17">
            <wui-button :round="false">禁用</wui-button>
          </wui-tooltip>
        </view>
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast, useQueue } from '@/uni_modules/wui-design-uni'
import { ref } from 'vue'

const show1 = ref<boolean>(false)
const show2 = ref<boolean>(false)
const show3 = ref<boolean>(false)
const show4 = ref<boolean>(false)
const show5 = ref<boolean>(false)
const show6 = ref<boolean>(false)
const show7 = ref<boolean>(false)
const show8 = ref<boolean>(false)
const show9 = ref<boolean>(false)
const show10 = ref<boolean>(false)
const show11 = ref<boolean>(false)
const show12 = ref<boolean>(false)
const show13 = ref<boolean>(false)
const show14 = ref<boolean>(false)
const show15 = ref<boolean>(false)
const show16 = ref<boolean>(false)
const show17 = ref<boolean>(false)
const content = ref<string>('显示内容')

const toast = useToast()

const { closeOutside } = useQueue()

function control() {
  show15.value = !show15.value
  //   this.setData({ show15: !this.data.show15 })
}
function onShow() {
  console.log('显示')
}
function onHide() {
  toast.show('文字提示关闭')
}
function handleChange1(event: any) {
  console.log(event)
}
function handleChange2(event: any) {
  console.log(event)
}
function handleChange3(event: any) {
  console.log(event)
}
function handleChange4(event: any) {
  console.log(event)
}
function handleChange5(event: any) {
  console.log(event)
}
function handleChange6(event: any) {
  console.log(event)
}
function handleChange7(event: any) {
  console.log(event)
}
function handleChange8(event: any) {
  console.log(event)
}
function handleChange9(event: any) {
  console.log(event)
}
function handleChange10(event: any) {
  console.log(event)
}
function handleChange11(event: any) {
  console.log(event)
}
function handleChange12(event: any) {
  console.log(event)
}
function handleChange13(event: any) {
  console.log(event)
}
function handleChange14(event: any) {
  console.log(event)
}
function handleChange15(event: any) {
  console.log(event)
}
function handleChange16(event: any) {
  console.log(event)
}
function handleChange17(event: any) {
  console.log(event)
}
</script>
<style lang="scss" scoped>
.position-wrap {
  position: relative;
}
.center {
  text-align: center;
}
.left {
  float: left;
  display: flex;
  flex-direction: column;
}
.right {
  float: right;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-bottom: 20px;
}
.top {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}
.bottom {
  clear: both;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.demo-left {
  text-align: left;
}
.button-control {
  float: left;
}
.demo-control {
  text-align: center;
  display: block;
  padding-top: 18px;
  clear: both;
  margin-bottom: 10px;
}
.lines-demo {
  padding: 30px 0;
}
.lines-content {
  color: #fff;
  padding: 5px;
  width: 90px;
}
</style>
