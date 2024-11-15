<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-count-to :endVal="endVal" suffix="年" color="#16baaa"></wui-count-to>
      <wui-count-to prefix="￥" :decimals="2" :endVal="186.321" :fontSize="32" suffix="%" color="#1e9fff"></wui-count-to>
      <wui-count-to prefix="￥" :decimals="2" :endVal="21286.321" :fontSize="32" suffix="%" color="#ff5722"></wui-count-to>
      <wui-count-to prefix="￥" :decimals="2" :endVal="21286.321" :fontSize="32" suffix="%" color="#ffb800" :duration="2000"></wui-count-to>
    </demo-block>

    <demo-block title="设置主题">
      <wui-count-to type="primary" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></wui-count-to>
      <wui-count-to type="error" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></wui-count-to>
      <wui-count-to type="success" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></wui-count-to>
      <wui-count-to type="warning" prefix="￥" :startVal="0" :endVal="888888" suffix="%"></wui-count-to>
      <wui-count-to prefix="￥" :startVal="0" :endVal="888888" suffix="%"></wui-count-to>
    </demo-block>

    <demo-block title="手动控制">
      <wui-count-to
        ref="countTo"
        :auto-start="false"
        prefix="￥"
        :startVal="1000"
        :decimals="3"
        :endVal="9999.32"
        :fontSize="32"
        suffix="%"
        color="#1e9fff"
      ></wui-count-to>

      <wui-grid clickable border>
        <wui-grid-item text="开始" icon="play-circle-stroke" @itemclick="start" />
        <wui-grid-item text="暂停" icon="pause-circle" @itemclick="pause" />
        <wui-grid-item text="重置" icon="refresh" @itemclick="reset" />
      </wui-grid>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import type { CountToInstance } from '@/uni_modules/wui-design-uni/components/wui-count-to/types'
import { ref } from 'vue'

const endVal = ref<number>(2024)
const countTo = ref<CountToInstance>()

const start = () => {
  countTo.value!.start()
}
const pause = () => {
  countTo.value!.pause()
}
const reset = () => {
  countTo.value!.reset()
}
</script>
<style lang="scss" scoped></style>
