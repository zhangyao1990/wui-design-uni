<template>
  <view>
    <page-wraper>
      <demo-block title="基本用法">
        <wui-button @click="showToast">toast</wui-button>
        <wui-button @click="showLongToast">长文案</wui-button>
      </demo-block>
      <demo-block title="类型toast">
        <wui-button @click="showSuccessToast">成功toast</wui-button>
        <wui-button @click="showErrorToast">错误toast</wui-button>
        <wui-button @click="showWarnToast">警告toast</wui-button>
        <wui-button @click="showNormalToast">常规toast</wui-button>
      </demo-block>
      <demo-block title="使用图标">
        <wui-button @click="showInnerIconToast">内部图标</wui-button>
        <wui-button @click="showCustomIconToast">自定义图标</wui-button>
      </demo-block>
      <demo-block title="提示位置">
        <wui-button @click="showTopToast">顶部toast</wui-button>
        <wui-button @click="showBottomToast">底部toast</wui-button>
      </demo-block>
      <demo-block title="Loading">
        <wui-button @click="showLoadingToast">Loading加载</wui-button>
        <wui-button @click="showLoadingToast2">ring类型loading</wui-button>
      </demo-block>
    </page-wraper>
  </view>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/wui-design-uni'

const toast = useToast()

function showToast() {
  toast.show('提示信息')
}
function showSuccessToast() {
  toast.success('操作成功')
}
function showErrorToast() {
  toast.error('错误提示错误提示')
}
function showWarnToast() {
  toast.warning('提示信息')
}
function showNormalToast() {
  toast.info('常规提示常规提示')
}
function showTopToast() {
  toast.show({
    position: 'top',
    iconClass: 'star',
    msg: '提示信息',
    closed() {
      console.log(232)
    },
    opened() {
      console.log(2323232)
    }
  })
}
function showBottomToast() {
  toast.show({
    position: 'bottom',
    msg: '提示信息'
  })
}
function showLoadingToast() {
  toast.loading('3s后调用close关闭')
  setTimeout(() => {
    toast.close()
  }, 3000)
}
function showLoadingToast2() {
  toast.loading({
    msg: '3s后调用close关闭',
    loadingType: 'ring',
    loadingColor: '#fff'
  })
  setTimeout(() => {
    toast.close()
  }, 3000)
}
function showLongToast() {
  toast.show('这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文案')
}

function showInnerIconToast() {
  toast.show({
    iconClass: 'star',
    msg: '使用组件库内部图标'
  })
}

function showCustomIconToast() {
  toast.show({
    iconClass: 'kehuishouwu',
    classPrefix: 'fish',
    msg: '使用自定义图标'
  })
}
</script>
<style lang="scss" scoped>
:deep(button) {
  margin: 0 10px 10px 0;
}
</style>
