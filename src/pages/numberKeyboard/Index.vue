<template>
  <wui-toast></wui-toast>

  <page-wraper>
    <demo-block title="基本用法" transparent>
      <wui-cell-group border>
        <wui-cell title="默认键盘" is-link @click="showKeyBoard(1)" />
        <wui-cell title="带右侧栏的键盘" is-link @click="showKeyBoard(2)" />
        <wui-cell title="身份证键盘" is-link @click="showKeyBoard(3)" />
        <wui-cell title="带标题的键盘" is-link @click="showKeyBoard(4)" />
        <wui-cell title="slot自定义标题" is-link @click="showKeyBoard(9)" />
        <wui-cell title="多个额外按键" is-link @click="showKeyBoard(5)" />
        <wui-cell title="随机数字键盘" is-link @click="showKeyBoard(6)" />
        <wui-cell title="双向绑定" clickable :value="value1" @click="showKeyBoard(7)" />
        <wui-cell title="展示蒙层" clickable @click="showKeyBoard(8)" />
      </wui-cell-group>
    </demo-block>

    <wui-number-keyboard v-model:visible="visible1" @input="onInput" @delete="onDelete"></wui-number-keyboard>
    <wui-number-keyboard
      v-model:visible="visible2"
      mode="custom"
      extra-key="."
      close-text="完成"
      @input="onInput"
      @delete="onDelete"
    ></wui-number-keyboard>
    <wui-number-keyboard v-model:visible="visible3" extra-key="X" close-text="完成" @input="onInput" @delete="onDelete" />
    <wui-number-keyboard
      v-model:visible="visible4"
      title="输入密码"
      extra-key="."
      close-text="完成"
      @input="onInput"
      @delete="onDelete"
    ></wui-number-keyboard>
    <wui-number-keyboard v-model:visible="visible9" extra-key="." close-text="完成" @input="onInput" @delete="onDelete">
      <template #title>
        <text style="color: red">自定义标题</text>
      </template>
    </wui-number-keyboard>

    <wui-number-keyboard v-model:visible="visible5" mode="custom" :extra-key="['00', '.']" close-text="完成" @input="onInput" @delete="onDelete" />

    <wui-number-keyboard v-model:visible="visible6" random-key-order @input="onInput" @delete="onDelete" />

    <wui-number-keyboard
      v-model="value1"
      :maxlength="6"
      v-model:visible="visible7"
      title="键盘标题"
      extra-key="."
      close-text="完成"
      @input="onInput"
      @delete="onDelete"
    ></wui-number-keyboard>

    <wui-number-keyboard :modal="true" v-model:visible="visible8" @input="onInput" @delete="onDelete" />
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/wui-design-uni'
import { ref } from 'vue'
const { show: showToast } = useToast()
const visible1 = ref<boolean>(false)
const visible2 = ref<boolean>(false)
const visible3 = ref<boolean>(false)
const visible4 = ref<boolean>(false)
const visible5 = ref<boolean>(false)
const visible6 = ref<boolean>(false)
const visible7 = ref<boolean>(false)
const visible8 = ref<boolean>(false)
const visible9 = ref<boolean>(false)

const visibleArr = [visible1, visible2, visible3, visible4, visible5, visible6, visible7, visible8, visible9]

const value1 = ref<string>('')

function showKeyBoard(index: number) {
  visibleArr.forEach((item, i) => (i === index - 1 ? (item.value = true) : (item.value = false)))
}

const onInput = (value: string) => showToast(`${value}`)
const onDelete = () => showToast('删除')
</script>
<style lang="scss" scoped></style>
