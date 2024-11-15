<template>
  <page-wraper>
    <view>
      <demo-block title="基本用法">
        <wui-button>主要按钮</wui-button>
        <wui-button type="success">成功按钮</wui-button>
        <wui-button type="info">信息按钮</wui-button>
        <wui-button type="warning">警告按钮</wui-button>
        <wui-button type="error">危险按钮</wui-button>
      </demo-block>
      <demo-block title="禁用按钮">
        <wui-button disabled>主要按钮</wui-button>
        <wui-button type="success" disabled>成功按钮</wui-button>
        <wui-button type="info" disabled>信息按钮</wui-button>
        <wui-button type="warning" disabled>警告按钮</wui-button>
        <wui-button type="error" disabled>危险按钮</wui-button>
      </demo-block>
      <demo-block title="幽灵按钮">
        <wui-button plain>主要按钮</wui-button>
        <wui-button type="success" plain>成功按钮</wui-button>
        <wui-button type="info" plain>信息按钮</wui-button>
        <wui-button type="warning" plain>警告按钮</wui-button>
        <wui-button type="error" plain>危险按钮</wui-button>
      </demo-block>
      <demo-block title="细边框幽灵按钮">
        <wui-button plain hairline>主要按钮</wui-button>
        <wui-button type="success" plain hairline>成功按钮</wui-button>
        <wui-button type="info" plain hairline>信息按钮</wui-button>
        <wui-button type="warning" plain hairline>警告按钮</wui-button>
        <wui-button type="error" plain hairline>危险按钮</wui-button>
      </demo-block>
      <demo-block title="幽灵按钮禁用状态">
        <wui-button plain disabled>主要按钮</wui-button>
        <wui-button type="success" plain disabled>成功按钮</wui-button>
        <wui-button type="info" plain disabled>信息按钮</wui-button>
        <wui-button type="warning" plain disabled>警告按钮</wui-button>
        <wui-button type="error" plain disabled>危险按钮</wui-button>
      </demo-block>
      <demo-block title="按钮大小">
        <wui-button size="small">小型按钮</wui-button>
        <wui-button size="medium">普通按钮</wui-button>
        <wui-button size="large">大型按钮</wui-button>
      </demo-block>
      <demo-block title="加载中">
        <wui-button loading>加载中</wui-button>
        <wui-button type="success" loading>加载中</wui-button>
        <wui-button type="warning" loading>加载中</wui-button>
        <wui-button type="error" loading>加载中</wui-button>
        <wui-button type="info" loading>加载中</wui-button>
        <wui-button type="info" plain loading>加载中</wui-button>
      </demo-block>
      <demo-block title="文字按钮">
        <wui-button type="text">按钮</wui-button>
        <wui-button type="text" disabled>按钮</wui-button>
      </demo-block>
      <demo-block title="图标按钮">
        <wui-button type="icon" icon="delete-thin"></wui-button>
        <wui-button type="icon" icon="delete-thin" disabled></wui-button>
      </demo-block>
      <demo-block title="带图标的基本按钮">
        <wui-button icon="download">下载</wui-button>
        <wui-button icon="setting">设置</wui-button>
        <wui-button classPrefix="fish" icon="kehuishouwu">可回收</wui-button>
        <wui-button icon="download" size="small">下载</wui-button>
        <wui-button icon="setting" size="small">设置</wui-button>
        <wui-button icon="download" size="large">下载</wui-button>
        <wui-button icon="setting" size="large">设置</wui-button>
      </demo-block>
      <demo-block title="块状按钮，宽度100%">
        <wui-button block size="large">主要按钮</wui-button>
        <wui-button type="success" block size="large">成功按钮</wui-button>
        <wui-button type="info" block size="large">信息按钮</wui-button>
        <wui-button type="warning" block size="large">警告按钮</wui-button>
        <wui-button type="error" block size="large">危险按钮</wui-button>
      </demo-block>
      <demo-block title="常用按钮：块状+圆角">
        <wui-button block size="large" disabled>主要按钮</wui-button>
        <wui-button block size="large">主要按钮</wui-button>
        <wui-button block size="large" loading>主要按钮</wui-button>
        <wui-button type="info" block size="large" disabled>信息按钮</wui-button>
        <wui-button type="info" block size="large">信息按钮</wui-button>
      </demo-block>
      <demo-block title="常用按钮：圆角或圆角+幽灵">
        <view>
          <wui-button disabled>主操作</wui-button>
          <wui-button size="small" disabled>主操作</wui-button>
        </view>
        <view>
          <wui-button>主操作</wui-button>
          <wui-button size="small">主操作</wui-button>
        </view>
        <view>
          <wui-button type="info" disabled>次操作</wui-button>
          <wui-button type="info" size="small" disabled>次操作</wui-button>
        </view>
        <view>
          <wui-button type="info">次操作</wui-button>
          <wui-button type="info" size="small">次操作</wui-button>
        </view>
        <view>
          <wui-button plain disabled>幽灵按钮</wui-button>
          <wui-button size="small" plain disabled>幽灵按钮</wui-button>
        </view>
        <view>
          <wui-button plain>幽灵按钮</wui-button>
          <wui-button size="small" plain>幽灵按钮</wui-button>
        </view>
        <view>
          <wui-button type="info" plain disabled>次操作</wui-button>
          <wui-button type="info" size="small" plain disabled>次操作</wui-button>
        </view>
        <view>
          <wui-button type="info" plain>次操作</wui-button>
          <wui-button type="info" size="small" plain>次操作</wui-button>
        </view>
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
function handleGetuserinfo(event: any) {
  // TODO
  console.log(event)
}
</script>
<style lang="scss" scoped>
:deep(button) {
  margin: 0 10px 10px 0;
}
.button-block {
  margin-right: 0;
}
</style>
