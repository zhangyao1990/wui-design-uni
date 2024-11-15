<template>
  <view v-if="showControls" class="wui-swiper-nav__btn">
    <view class="wui-swiper-nav__btn--prev" @click="handleNav('prev')" />
    <view class="wui-swiper-nav__btn--next" @click="handleNav('next')" />
  </view>
  <view
    v-if="total >= minShowNum"
    :style="customStyle"
    :class="`wui-swiper-nav wui-swiper-nav--${direction} wui-swiper-nav--${type} wui-swiper-nav--${indicatorPosition} ${customClass}`"
  >
    <block v-if="type === 'dots' || type === 'dots-bar'">
      <view
        v-for="(item, index) in total"
        :key="index"
        :class="`wui-swiper-nav__item--${type} ${current === index ? 'is-active' : ''} is-${direction}`"
      ></view>
    </block>
    <block v-if="type === 'fraction'">{{ current + 1 }}/{{ total }}</block>
  </view>
</template>

<script lang="ts" setup>
import { swiperNavprops } from './types'

defineProps(swiperNavprops)

const emit = defineEmits(['change'])

function handleNav(dir: 'prev' | 'next') {
  const source: string = 'nav'
  emit('change', { dir, source })
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
