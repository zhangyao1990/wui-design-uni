<!--
 * @Author: Mr zhang
 * @Date: 2023-11-05 12:09:52
 * @LastEditTime: 2024-03-17 20:15:39
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: /wui-design-uni/src/pages/sidebar/demo2.vue
 * 记得注释
-->
<template>
  <page-wraper>
    <view class="wraper">
      <wui-sidebar v-model="active" @change="handleChange">
        <wui-sidebar-item
          v-for="(item, index) in categories"
          :key="index"
          :value="index"
          :label="item.label"
          :icon="item.icon"
          :disabled="item.disabled"
        />
      </wui-sidebar>
      <view class="content" :style="`transform: translateY(-${active * 100}%)`">
        <scroll-view
          v-for="(item, index) in categories"
          :key="index"
          class="category"
          scroll-y
          scroll-with-animation
          :show-scrollbar="false"
          :scroll-top="scrollTop"
          :throttle="false"
        >
          <wui-cell-group :title="item.title" border>
            <wui-cell v-for="(cell, index) in item.items" :key="index" :title="cell.title" :label="cell.label">
              <wui-icon name="github-filled" size="24px"></wui-icon>
            </wui-cell>
          </wui-cell-group>
        </scroll-view>
      </view>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref, nextTick } from 'vue'

const active = ref<number>(1)
const scrollTop = ref<number>(0)
const subCategories = new Array(24).fill({ title: '标题文字', label: '这是描述这是描述' }, 0, 24)
const categories = ref([
  {
    label: '分类一',
    title: '标题一',
    icon: 'thumb-up',
    items: subCategories,
    disabled: false
  },
  {
    label: '分类二',
    title: '标题二',
    icon: 'thumb-up',
    items: subCategories,
    disabled: false
  },
  {
    label: '分类三',
    title: '标题三',
    icon: 'thumb-up',
    items: subCategories.slice(0, 18),
    disabled: false
  },
  {
    label: '分类四',
    title: '标题四',
    icon: 'thumb-up',
    items: subCategories.slice(0, 21),
    disabled: false
  },
  {
    label: '分类五',
    title: '标题五',
    icon: 'thumb-up',
    items: subCategories,
    disabled: false
  },
  {
    label: '分类六',
    title: '标题六',
    icon: 'thumb-up',
    items: subCategories.slice(0, 18),
    disabled: false
  },
  {
    label: '分类七',
    title: '标题七',
    icon: 'thumb-up',
    items: subCategories,
    disabled: true
  }
])

function handleChange({ value }: any) {
  active.value = value
  scrollTop.value = -1
  nextTick(() => {
    scrollTop.value = 0
  })
}
</script>
<style lang="scss" scoped>
.wraper {
  display: flex;
  height: calc(100vh - var(--window-top));
  height: calc(100vh - var(--window-top) - constant(safe-area-inset-bottom));
  height: calc(100vh - var(--window-top) - env(safe-area-inset-bottom));
  overflow: hidden;
}
.content {
  flex: 1;
  background: #fff;
  transition: transform 0.3s ease;
}
.category {
  box-sizing: border-box;
  height: 100%;
}
</style>
