<!--
 * @Author: Mr zhang
 * @Date: 2023-10-17 17:20:31
 * @LastEditTime: 2024-10-12 12:47:30
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: \wui-design-uni\src\pages\navbar\Index.vue
 * 记得注释
-->
<template>
  <wui-toast></wui-toast>
  <page-wraper>
    <wui-navbar fixed placeholder title="Navbar 导航条" left-arrow safeAreaInsetTop @click-left="handleClickLeft"></wui-navbar>

    <demo-block title="基础用法" transparent>
      <wui-navbar title="标题"></wui-navbar>
    </demo-block>

    <demo-block title="返回上级" transparent>
      <wui-navbar title="标题" left-text="返回" left-arrow @click-left="handleClickLeft"></wui-navbar>
    </demo-block>

    <demo-block title="右侧按钮" transparent>
      <wui-navbar
        title="标题"
        left-text="返回"
        left-arrow
        right-text="按钮"
        @click-left="handleClickLeft"
        @click-right="handleClickRight"
      ></wui-navbar>
    </demo-block>

    <demo-block title="使用插槽" transparent>
      <wui-navbar title="标题" @click-left="handleClickLeft">
        <template #left>
          <wui-icon name="arrow-left" size="24px" class="wui-navbar__arrow" />
        </template>
        <template #right>
          <wui-icon name="search" size="18" />
        </template>
      </wui-navbar>
    </demo-block>

    <demo-block title="禁用按钮" transparent>
      <wui-navbar title="标题" left-text="返回" right-text="按钮" left-arrow left-disabled right-disabled></wui-navbar>
    </demo-block>

    <demo-block title="胶囊样式" transparent>
      <wui-navbar title="标题" left-text="返回" right-text="设置" left-arrow>
        <template #capsule>
          <wui-navbar-capsule @back="handleBack" @back-home="handleBackHome"></wui-navbar-capsule>
        </template>
      </wui-navbar>
    </demo-block>

    <demo-block title="带搜索栏" transparent>
      <wui-navbar left-text="返回" right-text="设置" left-arrow>
        <template #title>
          <view class="search-box">
            <wui-search v-model="keyword" hide-cancel placeholder-left></wui-search>
          </view>
        </template>
      </wui-navbar>
    </demo-block>
    <view style="height: 500rpx"></view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/wui-design-uni'
import { ref } from 'vue'

const keyword = ref('')
const { show: showToast } = useToast()

function handleClickLeft() {
  uni.navigateBack({})
}

function handleClickRight() {
  showToast('按钮')
}

function handleBack() {
  uni.navigateBack({})
}

function handleBackHome() {
  uni.reLaunch({ url: '/pages/index/Index' })
}
</script>
<style lang="scss" scoped>
.search-box {
  display: flex;
  height: 100%;
  align-items: center;
  --wui-search-padding: 0;
  --wui-search-side-padding: 0;
  :deep() {
    .wui-search {
      background: transparent;
    }
  }
}
</style>
