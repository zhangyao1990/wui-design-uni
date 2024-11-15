<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-text :text="text"></wui-text>
    </demo-block>

    <demo-block title="设置主题">
      <view style="display: flex">
        <wui-text type="primary" text="主色"></wui-text>
        <wui-text type="error" text="错误"></wui-text>
        <wui-text type="success" text="成功"></wui-text>
        <wui-text type="warning" text="警告"></wui-text>
        <wui-text text="默认"></wui-text>
      </view>
    </demo-block>

    <demo-block title="自定义字体颜色">
      <wui-text :text="text" color="#36B8C2"></wui-text>
    </demo-block>

    <demo-block title="是否粗体">
      <wui-text :text="text" bold></wui-text>
    </demo-block>

    <demo-block title="字体大小">
      <wui-text :text="text" size="16px"></wui-text>
    </demo-block>

    <demo-block title="脱敏">
      <view style="display: flex; align-items: center">
        <wui-text text="张长三" mode="name" :format="true"></wui-text>
        <wui-text text="18888888888" mode="phone" :format="true"></wui-text>
      </view>
    </demo-block>

    <demo-block title="lines">
      <view>
        <wui-text :text="text" :lines="2" size="16px"></wui-text>
      </view>
    </demo-block>

    <demo-block title="lineHeight">
      <wui-text :text="text" :lines="2" lineHeight="20px"></wui-text>
    </demo-block>

    <demo-block title="mode">
      <view>
        <view><wui-text text="18888888888" mode="phone"></wui-text></view>
        <view><wui-text text="王三" mode="name"></wui-text></view>
        <view><wui-text text="1719976636911" mode="date"></wui-text></view>
      </view>
    </demo-block>

    <demo-block title="前后插槽">
      <view>
        <wui-text text="12345678901" mode="phone" format type="primary" prefix="Prefix" suffix="Suffix" />
        <br />
        <wui-text text="12345678901" mode="phone" format type="primary">
          <template #prefix>
            <text>Prefix</text>
          </template>
          <template #suffix>Suffix</template>
        </wui-text>
      </view>
    </demo-block>

    <demo-block title="金额">
      <view>
        <wui-text text="16354.156" mode="price" type="success" decoration="line-through" prefix="￥" />
      </view>
    </demo-block>

    <demo-block title="文字装饰">
      <view>
        <wui-text :text="text" type="warning" decoration="underline" />
      </view>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const text = ref<string>(
  '芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。'
)
function clickTest() {
  console.log(1)
}
</script>
<style lang="scss" scoped></style>
