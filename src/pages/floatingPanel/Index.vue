<template>
  <wui-toast></wui-toast>
  <view class="floating-panel">
    <page-wraper>
      <wui-tabs v-model="tab">
        <wui-tab :title="`基础用法`">
          <wui-floating-panel safeAreaInsetBottom>
            <wui-cell-group border>
              <wui-cell v-for="item in data" :key="item" :title="item" />
            </wui-cell-group>
          </wui-floating-panel>
        </wui-tab>
        <wui-tab :title="`自定义锚点`">
          <wui-floating-panel v-model:height="height" :anchors="anchors" safeAreaInsetBottom @heightChange="handleHeightChange">
            <view class="inner-content">自定义锚点 {{ anchors.map(addUnit) }} - {{ addUnit(height.toFixed(0)) }}</view>
          </wui-floating-panel>
        </wui-tab>
        <wui-tab :title="`仅头部拖拽`">
          <wui-floating-panel :contentDraggable="false">
            <view class="inner-content">内容区不可以拖拽</view>
          </wui-floating-panel>
        </wui-tab>
      </wui-tabs>
    </page-wraper>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useToast } from '@/uni_modules/wui-design-uni'
import { addUnit } from '@/uni_modules/wui-design-uni/components/common/util'

const { show } = useToast()

const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const tab = ref<number>(0)
const height = ref<number>(0)
const windowHeight = ref<number>(0)
const anchors = ref<number[]>([])

const handleHeightChange = ({ height }: { height: number }) => {
  show(addUnit(height))
}

onLoad(() => {
  windowHeight.value = uni.getSystemInfoSync().windowHeight
  anchors.value = [100, Math.round(0.4 * windowHeight.value), Math.round(0.7 * windowHeight.value)]
  height.value = anchors.value[1]
})
</script>

<style lang="scss" scoped>
.inner-content {
  padding: 1rem;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
</style>
