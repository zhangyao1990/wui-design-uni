<template>
  <wui-toast />
  <view class="fab" @click="closeOutside">
    <page-wraper>
      <demo-block title="悬浮按钮主题色">
        <wui-radio-group v-model="type" inline shape="dot">
          <wui-radio value="primary" custom-class="custom-radio">主要按钮</wui-radio>
          <wui-radio value="success" custom-class="custom-radio">成功按钮</wui-radio>
          <wui-radio value="warning" custom-class="custom-radio">警告按钮</wui-radio>
          <wui-radio value="error" custom-class="custom-radio">危险按钮</wui-radio>
          <wui-radio value="info" custom-class="custom-radio">信息按钮</wui-radio>
        </wui-radio-group>
      </demo-block>
      <demo-block title="悬浮按钮位置">
        <wui-radio-group v-model="position" inline shape="dot">
          <wui-radio value="left-top" custom-class="custom-radio">左上</wui-radio>
          <wui-radio value="right-top" custom-class="custom-radio">右上</wui-radio>
          <wui-radio value="left-bottom" custom-class="custom-radio">左下</wui-radio>
          <wui-radio value="right-bottom" custom-class="custom-radio">右下</wui-radio>
        </wui-radio-group>
      </demo-block>
      <demo-block title="菜单弹出方向">
        <wui-radio-group v-model="direction" inline shape="dot">
          <wui-radio value="top" custom-class="custom-radio">向上</wui-radio>
          <wui-radio value="bottom" custom-class="custom-radio">向下</wui-radio>
          <wui-radio value="right" custom-class="custom-radio">向右</wui-radio>
          <wui-radio value="left" custom-class="custom-radio">向左</wui-radio>
        </wui-radio-group>
      </demo-block>
      <demo-block title="禁用">
        <view @click.stop="">
          <wui-switch v-model="disabled" size="22px" />
        </view>
      </demo-block>
      <demo-block title="可拖动">
        <view @click.stop="">
          <wui-switch v-model="draggable" size="22px" />
        </view>
      </demo-block>

      <demo-block title="切换展示">
        <view @click.stop="">
          <wui-button type="primary" @click="active = !active" round>切换</wui-button>
        </view>
      </demo-block>

      <demo-block title="自定义触发器">
        <view @click.stop="">
          <wui-switch v-model="useTriggerSlot" size="22px" />
        </view>
      </demo-block>
      <wui-fab
        v-if="!useTriggerSlot"
        v-model:active="active"
        :disabled="disabled"
        :type="type"
        :position="position"
        :direction="direction"
        :draggable="draggable"
        @click="showToast('我被点了')"
      >
        <wui-button @click="showToast('一键三连')" :disabled="disabled" custom-class="custom-button" type="primary" round>
          <wui-icon name="github-filled" size="22px"></wui-icon>
        </wui-button>
        <wui-button @click="showToast('我要收藏')" :disabled="disabled" custom-class="custom-button" type="success" round>
          <wui-icon name="star" size="22px"></wui-icon>
        </wui-button>

        <wui-button @click="showToast('我要投币')" :disabled="disabled" custom-class="custom-button" type="error" round>
          <wui-icon name="money-circle" size="22px"></wui-icon>
        </wui-button>
        <wui-button @click="showToast('我要点赞')" :disabled="disabled" custom-class="custom-button" type="warning" round>
          <wui-icon name="thumb-up" size="22px"></wui-icon>
        </wui-button>
      </wui-fab>

      <wui-fab v-else position="left-bottom" :draggable="draggable" :expandable="false">
        <template #trigger>
          <wui-button @click="handleCustomClick" icon="share" type="error">分享给朋友</wui-button>
        </template>
      </wui-fab>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import { useQueue, useToast } from '@/uni_modules/wui-design-uni'
import { ref } from 'vue'
const { show: showToast } = useToast()
const active = ref<boolean>(false)
const type = ref<'primary' | 'success' | 'info' | 'warning' | 'error' | 'default'>('primary')
const position = ref<'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'>('left-bottom')
const direction = ref<'top' | 'right' | 'bottom' | 'left'>('top')
const disabled = ref<boolean>(false)
const draggable = ref<boolean>(false)
const useTriggerSlot = ref<boolean>(false)

const { closeOutside } = useQueue()

function handleCustomClick() {
  showToast('分享给朋友')
}
</script>
<style lang="scss" scoped>
.fab {
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 88rpx;
  :deep(.custom-button) {
    min-width: auto !important;
    box-sizing: border-box;
    width: 32px !important;
    height: 32px !important;
    border-radius: 16px !important;
    margin: 8rpx;
  }

  :deep(.custom-radio) {
    height: 32px !important;
    line-height: 32px !important;
  }
}
</style>
