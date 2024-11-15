<template>
  <page-wraper>
    <demo-block title="基础用法">
      <wui-row>
        <wui-col :span="24"><view class="bg-dark1">span: 24</view></wui-col>
      </wui-row>
      <wui-row>
        <wui-col :span="12"><view class="bg-dark">span: 12</view></wui-col>
        <wui-col :span="12"><view class="bg-light">span: 12</view></wui-col>
      </wui-row>
      <wui-row>
        <wui-col :span="8"><view class="bg-dark">span: 8</view></wui-col>
        <wui-col :span="8"><view class="bg-light">span: 8</view></wui-col>
        <wui-col :span="8"><view class="bg-dark">span: 8</view></wui-col>
      </wui-row>
      <wui-row>
        <wui-col :span="6"><view class="bg-dark">span: 6</view></wui-col>
        <wui-col :span="6"><view class="bg-light">span: 6</view></wui-col>
        <wui-col :span="6"><view class="bg-dark">span: 6</view></wui-col>
        <wui-col :span="6"><view class="bg-light">span: 6</view></wui-col>
      </wui-row>
    </demo-block>
    <demo-block title="分栏偏移">
      <wui-row>
        <wui-col :span="4"><view class="bg-dark">span: 4</view></wui-col>
        <wui-col :span="8" :offset="4"><view class="bg-light">span: 8 offset: 4</view></wui-col>
      </wui-row>
      <wui-row>
        <wui-col :span="8" :offset="4"><view class="bg-dark">span: 8 offset: 4</view></wui-col>
        <wui-col :span="8" :offset="4"><view class="bg-light">span: 8 offset: 4</view></wui-col>
      </wui-row>
    </demo-block>
    <demo-block title="分栏间隔">
      <wui-row :gutter="20">
        <wui-col :span="8"><view class="bg-dark">span: 8</view></wui-col>
        <wui-col :span="8"><view class="bg-light">span: 8</view></wui-col>
        <wui-col :span="8"><view class="bg-dark">span: 8</view></wui-col>
      </wui-row>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.bg-dark1,
.bg-dark,
.bg-light {
  border-radius: 4px;
  min-height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.45);
}
.bg-dark1 {
  background: #99a9bf;
  color: #fff;
}
.bg-dark {
  background: #d3dce6;
}
.bg-light {
  background: #e5e9f2;
}
</style>
