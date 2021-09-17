<template lang="pug">
//- 页面加载遮罩层
#loading
  icon-font(
    :icon="'twitter'"
  )
</template>

<script setup>
import iconFont from './icon.vue'
</script>

<style lang="less" scoped>
#loading{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0; left: 0;
  background-color: var(--themeColor);
  transition: .5s all ease-in-out;
  z-index: 99999;

  svg{
    width: 64px;
    height: 64px;
    color: var(--highLight);
  }

  &.hide{
    transform: scale(3);
    opacity: 0;
    pointer-events: none;
  }
}
</style>