<!--
 * @Author: Mr zhang
 * @Date: 2023-06-13 11:47:12
 * @LastEditTime: 2024-02-26 14:42:16
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: \wui-design-uni\src\pages\sticky\Index.vue
 * 记得注释
-->
<template>
  <page-wraper>
    <view style="height: 250vh">
      <view class="demo-block">
        <view class="demo-title">基本用法</view>
        <view class="demo-container">
          <wui-sticky custom-style="margin-left: 20px">
            <wui-button type="success">基础用法</wui-button>
          </wui-sticky>
        </view>
      </view>

      <view class="demo-block">
        <view class="demo-title">吸顶距离</view>
        <view class="demo-container">
          <wui-sticky :offset-top="50" custom-style="margin-left: 120px">
            <wui-button>吸顶距离</wui-button>
          </wui-sticky>
        </view>
      </view>

      <view class="demo-block">
        <view class="demo-title">相对容器</view>
        <view class="demo-container">
          <wui-sticky-box>
            <view class="custom-container">
              <wui-sticky custom-style="margin-left: 220px">
                <wui-button type="warning">相对容器</wui-button>
              </wui-sticky>
            </view>
          </wui-sticky-box>
        </view>
      </view>

      <view class="demo-block">
        <view class="demo-title">动态插入</view>
        <view class="demo-container">
          <wui-button type="info" plain @click="insert">点击插入</wui-button>
          <wui-sticky custom-style="margin-left: 220px">
            <wui-button type="error" v-if="show">动态生成</wui-button>
          </wui-sticky>
        </view>
      </view>

      <view class="demo-block">
        <view class="demo-title">相对容器+吸顶距离</view>
        <view class="demo-container">
          <wui-sticky-box>
            <view class="custom-container">
              <wui-sticky :offset-top="150">
                <wui-button type="warning">相对容器+吸顶距离</wui-button>
              </wui-sticky>
            </view>
          </wui-sticky-box>
        </view>
      </view>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'
const show = ref<boolean>(false)

function display() {
  show.value = true
}
function insert() {
  display()
}
onShow(() => {
  setTimeout(display, 5000)
})
</script>
<style lang="scss" scoped>
.wui-theme-dark {
  .custom-container {
    background: $-dark-background2;
  }
}
.demo-block {
  padding: 15px 0;
  color: #666;
}

.custom-container {
  height: 120px;
  width: 100vw;
  background-color: #ffffff;
}
.is-white {
  background: #fff;
}
.demo-title {
  padding: 0 15px;
  margin: 10px 0;
  font-size: 13px;
}
</style>
