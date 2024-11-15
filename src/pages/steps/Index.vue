<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-steps :active="0">
        <wui-step></wui-step>
        <wui-step></wui-step>
        <wui-step></wui-step>
      </wui-steps>
    </demo-block>
    <demo-block title="水平局中">
      <wui-steps :active="0" align-center>
        <wui-step></wui-step>
        <wui-step></wui-step>
        <wui-step></wui-step>
      </wui-steps>
    </demo-block>
    <demo-block title="标题和描述信息">
      <wui-steps :active="active" align-center>
        <wui-step title="步骤1" description="注册1个账号" />
        <wui-step title="步骤2" description="登录账号并绑定手机" />
        <wui-step title="步骤3" description="完善个人信息" />
      </wui-steps>
      <view style="margin-top: 15px; text-align: center">
        <wui-button size="small" @click="nextStep">下一步</wui-button>
      </view>
    </demo-block>
    <demo-block title="修改图标">
      <wui-steps :active="1" align-center>
        <wui-step icon="setting" />
        <wui-step icon="list" />
        <wui-step icon="clock" />
      </wui-steps>
    </demo-block>
    <demo-block title="竖向步骤条">
      <wui-steps :active="1" vertical>
        <wui-step description="注册1个账号" />
        <wui-step description="登录账号并绑定手机，后面是比较长的文案，后面是比较长的文案" />
        <wui-step description="完善个人信息" />
      </wui-steps>
    </demo-block>
    <demo-block title="点状步骤和垂直方向">
      <wui-steps :active="1" vertical dot>
        <wui-step description="注册1个账号" />
        <wui-step description="登录账号并绑定手机" />
        <wui-step description="完善个人信息" />
      </wui-steps>
    </demo-block>
    <demo-block title="修改状态">
      <wui-steps :active="1" align-center>
        <wui-step title="绑定手机" status="error" />
        <wui-step title="重新绑定手机" />
        <wui-step title="步骤3" />
      </wui-steps>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const active = ref<number>(0)

function nextStep() {
  active.value = active.value + 1
}
</script>
<style lang="scss" scoped></style>
