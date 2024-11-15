<template>
  <view>
    <page-wraper>
      <demo-block title="Fade 动画">
        <wui-button @click="fade">fade</wui-button>
        <wui-button @click="fadeUp">fade-up</wui-button>
        <wui-button @click="fadeDown">fade-down</wui-button>
        <wui-button @click="fadeLeft">fade-left</wui-button>
        <wui-button @click="fadeRight">fade-right</wui-button>
      </demo-block>
      <demo-block title="Slide 动画">
        <wui-button @click="slideUp">slide-up</wui-button>
        <wui-button @click="slideDown">slide-down</wui-button>
        <wui-button @click="slideLeft">slide-left</wui-button>
        <wui-button @click="slideRight">slide-right</wui-button>
      </demo-block>
      <demo-block title="Zoom 动画">
        <wui-button @click="zoomIn">zoom-in</wui-button>
        <wui-button @click="zoomOut">zoom-out</wui-button>
      </demo-block>
      <demo-block title="自定义动画">
        <wui-button @click="custom">custom</wui-button>
      </demo-block>

      <wui-transition :show="show" :name="name" custom-class="block" />

      <wui-transition
        :show="customShow"
        :duration="{ enter: 700, leave: 1000 }"
        enter-class="custom-enter"
        enter-active-class="custom-enter-active"
        enter-to-class="custom-enter-to"
        leave-class="custom-leave"
        leave-active-class="custom-leave-active"
        leave-to-class="custom-leave-to"
        custom-class="block"
      />
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import type { TransitionName } from '@/uni_modules/wui-design-uni/components/wui-transition/types'
import { ref } from 'vue'

const show = ref<boolean>(false)
const name = ref<TransitionName>()
const customShow = ref<boolean>(false)
function fade() {
  transition('fade')
}
function fadeUp() {
  transition('fade-up')
}
function fadeDown() {
  transition('fade-down')
}
function fadeLeft() {
  transition('fade-left')
}
function fadeRight() {
  transition('fade-right')
}
function slideUp() {
  transition('slide-up')
}
function slideDown() {
  transition('slide-down')
}
function slideLeft() {
  transition('slide-left')
}
function slideRight() {
  transition('slide-right')
}
function zoomIn() {
  transition('zoom-in')
}
function zoomOut() {
  transition('zoom-out')
}
function custom() {
  customShow.value = true
  setTimeout(() => {
    customShow.value = false
  }, 1200)
}
function transition(transition: TransitionName) {
  name.value = transition
  show.value = true
  setTimeout(() => {
    show.value = false
  }, 500)
}
</script>
<style lang="scss" scoped>
:deep(button) {
  margin: 0 10px 10px 0;
}
:deep(.block) {
  position: fixed;
  left: 50%;
  top: 50%;
  margin: -50px 0 0 -50px;
  width: 100px;
  height: 100px;
  background: #0083ff;
}

:deep(.custom-enter-active),
:deep(.custom-leave-active) {
  transition-property: background, transform;
}
:deep(.custom-enter) {
  transform: translate3d(-100px, -100px, 0) rotate(-180deg);
  background: #ff0000;
}
:deep(.custom-leave-to) {
  transform: translate3d(100px, 100px, 0) rotate(180deg);
  background: #ff0000;
}
</style>
