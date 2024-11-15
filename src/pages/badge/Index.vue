<template>
  <view>
    <page-wraper>
      <demo-block title="展示消息数量">
        <wui-badge custom-class="badge" :modelValue="12">
          <wui-button :round="false" type="info" size="small">评论</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="3" bg-color="pink">
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="1" type="primary">
          <wui-button :round="false" type="info" size="small">评论</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="2" type="warning">
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="1" type="success">
          <wui-button :round="false" type="info" size="small">评论</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="2" type="info">
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
      </demo-block>

      <demo-block title="可定义消息最大值">
        <wui-badge custom-class="badge" :modelValue="200" :max="99">
          <wui-button :round="false" type="info" size="small">评论</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="200" :max="10">
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
      </demo-block>

      <demo-block title="自定义内容">
        <wui-badge custom-class="badge" modelValue="new">
          <wui-button :round="false" type="info" size="small">评论</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" modelValue="hot">
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
      </demo-block>

      <demo-block title="点状类型">
        <wui-badge custom-class="badge" is-dot>数据查询</wui-badge>
        <wui-badge custom-class="badge" is-dot>
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
      </demo-block>

      <demo-block title="显示0值">
        <wui-badge custom-class="badge" :modelValue="0" show-zero>
          <wui-button :round="false" type="info" size="small">评论</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="0">
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
        <wui-badge custom-class="badge" :modelValue="0" is-dot>
          <wui-button :round="false" type="info" size="small">回复</wui-button>
        </wui-badge>
      </demo-block>
    </page-wraper>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
:deep(.badge) {
  margin: 0 30px 20px 0;
  display: inline-block;
}
</style>
