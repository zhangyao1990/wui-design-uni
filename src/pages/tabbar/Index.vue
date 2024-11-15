<template>
  <page-wraper :safeAreaInsetBottom="false">
    <wui-toast></wui-toast>
    <demo-block hor="0" title="基础用法" transparent>
      <wui-tabbar bordered @change="handleChange" v-model="tabbar0">
        <wui-tabbar-item title="首页" icon="home"></wui-tabbar-item>
        <wui-tabbar-item title="分类" icon="cart"></wui-tabbar-item>
        <wui-tabbar-item title="我的" icon="user"></wui-tabbar-item>
      </wui-tabbar>
    </demo-block>

    <demo-block hor="0" title="通过名称匹配" transparent>
      <wui-tabbar bordered @change="handleChange" v-model="tabbar1">
        <wui-tabbar-item name="home" title="首页" icon="home"></wui-tabbar-item>
        <wui-tabbar-item name="cart" title="分类" icon="cart"></wui-tabbar-item>
        <wui-tabbar-item name="setting" title="设置" icon="setting"></wui-tabbar-item>
        <wui-tabbar-item name="user" title="我的" icon="user"></wui-tabbar-item>
      </wui-tabbar>
    </demo-block>

    <demo-block hor="0" title="徽标提示" transparent>
      <wui-tabbar v-model="tabbar2" @change="handleChange">
        <wui-tabbar-item is-dot :value="2" title="点状" icon="home"></wui-tabbar-item>
        <wui-tabbar-item :value="2" icon="cart" title="分类"></wui-tabbar-item>
        <wui-tabbar-item :value="30" title="我的" icon="user"></wui-tabbar-item>
        <wui-tabbar-item :value="200" title="最大值" icon="user"></wui-tabbar-item>
      </wui-tabbar>
    </demo-block>
    <demo-block hor="0" title="悬浮标签栏" transparent>
      <wui-tabbar shape="round" v-model="tabbar3" @change="handleChange">
        <wui-tabbar-item title="首页" is-dot :value="2" icon="home"></wui-tabbar-item>
        <wui-tabbar-item title="分类" :value="2" icon="cart"></wui-tabbar-item>
        <wui-tabbar-item title="相册" :value="30" icon="photo"></wui-tabbar-item>
        <wui-tabbar-item title="我的" :value="200" icon="user"></wui-tabbar-item>
      </wui-tabbar>
    </demo-block>

    <demo-block hor="0" title="自定义图标" transparent>
      <wui-tabbar v-model="tabbar4" @change="handleChange">
        <wui-tabbar-item :value="2" title="首页" icon="home"></wui-tabbar-item>
        <wui-tabbar-item :value="2" icon="cart" title="分类">
          <template #icon>
            <wui-img round height="40rpx" width="40rpx" src="https://registry.npmmirror.com/wui-design-uni-assets/*/files/panda.jpg"></wui-img>
          </template>
        </wui-tabbar-item>
        <wui-tabbar-item :value="3" title="我的" icon="user"></wui-tabbar-item>
      </wui-tabbar>
    </demo-block>

    <demo-block hor="0" title="自定义颜色" transparent>
      <wui-tabbar v-model="tabbar5" @change="handleChange" active-color="#ee0a24" inactive-color="#7d7e80">
        <wui-tabbar-item is-dot :value="2" title="点状" icon="home"></wui-tabbar-item>
        <wui-tabbar-item :value="2" icon="cart" title="分类"></wui-tabbar-item>
        <wui-tabbar-item :value="30" title="我的" icon="user"></wui-tabbar-item>
        <wui-tabbar-item :value="200" title="最大值" icon="photo"></wui-tabbar-item>
        <wui-tabbar-item :value="10" title="客服" icon="chat"></wui-tabbar-item>
      </wui-tabbar>
    </demo-block>
    <demo-block hor="0" title="监听切换事件" transparent>
      <wui-tabbar v-model="tabbar6" @change="handleChange1" active-color="#ee0a24" inactive-color="#7d7e80">
        <wui-tabbar-item title="首页" icon="home"></wui-tabbar-item>
        <wui-tabbar-item title="分类" icon="cart"></wui-tabbar-item>
        <wui-tabbar-item title="我的" icon="user"></wui-tabbar-item>
        <wui-tabbar-item title="相册" icon="photo"></wui-tabbar-item>
        <wui-tabbar-item title="客服" icon="chat"></wui-tabbar-item>
      </wui-tabbar>
    </demo-block>

    <demo-block hor="0" title="固定底部" transparent>
      <wui-tabbar fixed shape="round" v-model="tabbar7" @change="handleChange" bordered safeAreaInsetBottom placeholder>
        <wui-tabbar-item :value="2" is-dot title="首页" icon="home"></wui-tabbar-item>
        <wui-tabbar-item title="分类" icon="cart"></wui-tabbar-item>
        <wui-tabbar-item title="我的" icon="user"></wui-tabbar-item>
        <wui-tabbar-item :value="200" title="相册" icon="photo"></wui-tabbar-item>
        <wui-tabbar-item :value="10" title="客服" icon="chat"></wui-tabbar-item>
      </wui-tabbar>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/wui-design-uni'
import { ref } from 'vue'
const { show } = useToast()
const tabbar0 = ref(1)
const tabbar1 = ref('home')
const tabbar2 = ref(2)
const tabbar3 = ref(2)
const tabbar4 = ref(1)
const tabbar5 = ref(1)
const tabbar6 = ref(1)
const tabbar7 = ref(1)
function handleChange(event: any) {
  console.log(event)
}

function handleChange1({ value }: { value: string }) {
  show(`选中标签:${value}`)
}
</script>
<style lang="scss" scoped>
:deep(.page-wraper) {
  background: #f6f6f6;
}
</style>
