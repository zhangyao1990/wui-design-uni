<!--
 * @Author: Mr zhang
 * @Date: 2024-04-01 17:10:05
 * @LastEditTime: 2024-04-01 17:14:38
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: \wui-design-uni\docs\.vitepress\theme\components\HomeStar.vue
 * 记得注释
-->
<script setup lang="ts"></script>

<template>
  <p class="home-star">
    <a href="https://github.com/zhangyao1990/wui-design-uni">
      <img
        alt="GitHub Repo stars"
        src="https://img.shields.io/github/stars/zhangyao1990/wui-design-uni?logo=github&color=%234d80f0&link=https%3A%2F%2Fgithub.com%2zhangyao1990%2Fwui-design-uni"
      />
    </a>
  </p>
</template>

<style>
.home-star{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
