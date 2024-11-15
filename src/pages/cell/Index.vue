<template>
  <page-wraper>
    <wui-toast />
    <demo-block title="基本用法" transparent>
      <wui-cell-group>
        <wui-cell title="标题文字" value="内容" />
        <wui-cell title="标题文字" label="描述信息" value="内容" />
      </wui-cell-group>
    </demo-block>

    <demo-block title="图标" transparent>
      <wui-cell-group>
        <wui-cell title="标题文字" value="内容" icon="setting" />
        <wui-cell title="标题文字" value="内容">
          <template #icon>
            <view class="cell-icon"></view>
          </template>
        </wui-cell>
      </wui-cell-group>
    </demo-block>

    <demo-block title="分组标题" transparent>
      <wui-cell-group title="交易管理" value="内容">
        <wui-cell title="标题文字" value="内容" />
        <wui-cell title="标题文字" label="描述信息" value="内容"></wui-cell>
      </wui-cell-group>
    </demo-block>

    <demo-block title="大尺寸" transparent>
      <wui-cell-group>
        <wui-cell size="large" title="标题文字" value="内容" />
        <wui-cell title="标题文字" value="内容" size="large" icon="setting" is-link />
        <wui-cell size="large" title="标题文字" label="描述信息" value="内容" />
      </wui-cell-group>
    </demo-block>

    <demo-block title="展示边框线" transparent>
      <wui-cell-group title="交易管理" border>
        <wui-cell title="标题文字" value="内容" />
        <wui-cell :border="false" title="标题文字" label="这一个cell不想要边框" value="内容" />
        <wui-cell title="标题文字" label="描述信息" value="内容"></wui-cell>
      </wui-cell-group>
    </demo-block>

    <demo-block title="点击事件" transparent>
      <wui-cell-group>
        <wui-cell title="标题文字" value="内容" clickable @click="showToast" />
      </wui-cell-group>
    </demo-block>

    <demo-block title="页面跳转" transparent>
      <wui-cell-group>
        <wui-cell title="帮助与反馈" is-link to="/pages/index/Index" />
        <wui-cell title="设置" value="内容" is-link to="/pages/button/Index" replace></wui-cell>
      </wui-cell-group>
    </demo-block>

    <demo-block title="垂直居中" transparent>
      <wui-cell-group>
        <wui-cell title="标题文字" value="内容" center />
        <wui-cell title="标题文字" label="描述信息" value="内容" center />
      </wui-cell-group>
    </demo-block>

    <demo-block title="表单属性" transparent>
      <wui-cell-group border>
        <wui-cell title="必填" required>
          <wui-rate v-model="rate" icon="dong" active-icon="dong" @change="handleRateChange" />
        </wui-cell>
        <wui-cell title="上下结构" vertical>
          <wui-slider v-model="slider" @change="handleSliderChange" />
        </wui-cell>
      </wui-cell-group>
    </demo-block>

    <demo-block title="设置宽度" transparent>
      <wui-cell-group>
        <wui-cell title="标题文字" label="这里是文字描述这里是文字描述这里是文字描述" title-width="200px" value="内容" />
      </wui-cell-group>
    </demo-block>

    <demo-block title="自定义slot" transparent>
      <wui-cell-group>
        <wui-cell title="标题文字" center>
          <wui-button custom-class="custom-value" size="small" plain>按钮</wui-button>
        </wui-cell>
        <wui-cell title="标题文字" center>
          <view class="custom-value" style="height: 32px">
            <wui-switch v-model="switchValue" @change="handleSwitchChange" />
          </view>
        </wui-cell>
        <wui-cell title="标题文字" is-link to="/pages/index/index">
          <view class="custom-text">订购</view>
        </wui-cell>
        <wui-cell>
          <template #title>
            <view>
              <view style="display: inline-block">标题文字</view>
              <view class="end-time">25天后到期</view>
            </view>
          </template>
        </wui-cell>
      </wui-cell-group>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/wui-design-uni'
import { ref } from 'vue'
const rate = ref(0)
const slider = ref(0)
const switchValue = ref('')

function handleRateChange({ value }: any) {
  console.log(value)
}
function handleSliderChange({ value }: any) {
  console.log(value)
}
function handleSwitchChange({ value }: any) {
  console.log(value)
}
const toast = useToast()

function showToast() {
  toast.show('点击')
}
</script>
<style lang="scss" scoped>
.cell-icon {
  display: block;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  margin: 4px 4px 4px 0;
  background: url('https://img10.360buyimg.com/jmadvertisement/jfs/t1/71075/7/3762/1820/5d1f26d1E0d600b9e/a264c901943080ac.png') no-repeat;
  background-size: cover;
}
.custom-value {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  white-space: nowrap;
}
.custom-text {
  color: #f0883a;
}
.end-time {
  display: inline-block;
  margin-left: 8px;
  border: 1px solid #faa21e;
  padding: 0 4px;
  font-size: 10px;
  color: #faa21e;
}
</style>
