<!--
 * @Author: Mr zhang
 * @Date: 2024-08-09 10:12:54
 * @LastEditTime: 2024-08-09 13:10:34
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: \wui-design-uni\src\pages\countDown\Index.vue
 * 记得注释
-->
<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-count-down :time="time" />
    </demo-block>

    <demo-block title="自定义格式">
      <wui-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
    </demo-block>

    <demo-block title="毫秒级渲染">
      <wui-count-down :time="time" millisecond format="HH:mm:ss:SS" />
    </demo-block>

    <demo-block title="自定义样式">
      <wui-count-down :time="time">
        <template #default="{ current }">
          <span class="custom-count-down">{{ current.hours }}</span>
          <span class="custom-count-down-colon">:</span>
          <span class="custom-count-down">{{ current.minutes }}</span>
          <span class="custom-count-down-colon">:</span>
          <span class="custom-count-down">{{ current.seconds }}</span>
        </template>
      </wui-count-down>
    </demo-block>

    <demo-block title="手动控制">
      <wui-count-down ref="countDown" :time="3000" millisecond :auto-start="false" format="ss:SSS" @finish="onFinish"></wui-count-down>
      <wui-grid clickable border>
        <wui-grid-item text="开始" icon="play-circle-stroke" @itemclick="start" />
        <wui-grid-item text="暂停" icon="pause-circle" @itemclick="pause" />
        <wui-grid-item text="重置" icon="refresh" @itemclick="reset" />
      </wui-grid>
    </demo-block>
    <wui-toast></wui-toast>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/wui-design-uni'
import type { CountDownInstance } from '@/uni_modules/wui-design-uni/components/wui-count-down/types'
import { ref } from 'vue'
const { show: showToast } = useToast()

const time = ref(30 * 60 * 60 * 1000)

const countDown = ref<CountDownInstance>()

const start = () => {
  countDown.value!.start()
}
const pause = () => {
  countDown.value!.pause()
}
const reset = () => {
  countDown.value!.reset()
}
const onFinish = () => showToast('倒计时结束')
</script>
<style lang="scss" scoped>
.custom-count-down {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #f0883a;
  border-radius: 2px;
}

.custom-count-down-colon {
  display: inline-block;
  margin: 0 4px;
  color: #f0883a;
}
</style>
