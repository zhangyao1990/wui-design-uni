<template>
  <page-wraper>
    <view>
      <demo-block title="基本使用" transparent>
        <wui-gap bg-color="#FFFFFF"></wui-gap>
      </demo-block>
      <demo-block title="自定义背景颜色" transparent>
        <wui-gap bg-color="#4D80F0"></wui-gap>
      </demo-block>
      <demo-block title="自定义高度" transparent>
        <wui-gap bg-color="#4D80F0" height="120rpx"></wui-gap>
      </demo-block>
      <demo-block title="自定义样式" transparent>
        <wui-gap custom-class="custom-gap"></wui-gap>
      </demo-block>
      <demo-block custom-class="custom-safe-area-bottom" title="底部安全区" transparent>
        <wui-gap bg-color="#FFFFFF" safe-area-bottom height="120rpx"></wui-gap>
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
:deep(.custom-safe-area-bottom) {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
:deep(.custom-gap) {
  padding-bottom: 120rpx;
  background: #34d19d !important;
}
</style>
