<template>
  <wui-watermark
    :image="image"
    :width="130"
    :height="140"
    :image-width="38"
    content="wui-design-uni"
    :image-height="38"
    :opacity="0.5"
  ></wui-watermark>
  <view>
    <page-wraper>
      <demo-block title="基础用法">
        <wui-button @click="doSetImage(false)" plain>文字水印</wui-button>
        <wui-button @click="doSetImage(true)" plain>图片水印</wui-button>
      </demo-block>

      <demo-block title="展示效果">
        <wui-badge custom-class="badge" :modelValue="200" :max="99">
          <wui-button :round="false" type="info" size="small">评论</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="200" :max="10">
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
      </demo-block>
      <demo-block title="局部水印">
        <wui-watermark
          :opacity="0.8"
          image="https://wui-design-uni.cn/wui-design.png"
          :image-width="38"
          :image-height="38"
          :full-screen="false"
        ></wui-watermark>
        <wui-badge custom-class="badge" :modelValue="12">
          <wui-button :round="false" type="info" size="small">评论</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="3" bg-color="pink">
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="1" type="primary">
          <wui-button :round="false" type="info" size="small">评论</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="2" type="warning">
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="1" type="success">
          <wui-button :round="false" type="info" size="small">评论</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="2" type="info">
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
        <wui-cell-group border>
          <wui-cell size="large" title="标题文字" value="内容" />
          <wui-cell title="标题文字" value="内容" size="large" icon="setting" is-link />
          <wui-cell size="large" title="标题文字" label="描述信息" value="内容" />
          <wui-cell size="large" title="标题文字" value="内容" />
          <wui-cell title="标题文字" value="内容" size="large" icon="setting" is-link />
          <wui-cell size="large" title="标题文字" label="描述信息" value="内容" />
        </wui-cell-group>
      </demo-block>

      <demo-block title="展示效果">
        <wui-badge custom-class="badge" modelValue="new">
          <wui-button :round="false" type="info" size="small">评论</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" modelValue="hot">
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
      </demo-block>

      <demo-block title="展示效果">
        <wui-badge custom-class="badge" is-dot>数据查询</wui-badge>
        <wui-badge custom-class="badge" is-dot>
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
      </demo-block>
    </page-wraper>
  </view>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
const showImage = ref(false) // 是否展示图片

const image = computed(() => {
  return showImage.value ? 'https://wui-design-uni.cn/wui-design.png' : ''
})

function doSetImage(show: boolean) {
  showImage.value = show
}
</script>
<style lang="scss" scoped>
:deep(.badge) {
  margin: 0 30px 20px 0;
  display: inline-block;
}
</style>
