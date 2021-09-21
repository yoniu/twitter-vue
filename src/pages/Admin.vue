<template lang="pug">
.main 
  .banner
    span 后台管理
    a(href="javascript:;")
      icon(icon="thunderbolt")
  .login
    twitter-login
</template>

<script setup>
import icon from '../components/icon.vue'
import twitterLogin from '../components/admin/login.vue'
import { useMessage } from 'naive-ui'
</script>

<style lang="less" scoped>
  .banner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem .8rem;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1;
    border-bottom: 1px solid var(--border);

    &>a{
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--themeColor);
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      transition: .3s background-color ease-in-out;

      &:hover{
        background-color: var(--themeColorOp);
      }
    }
  }
  .login{
    margin-top: 2rem;
  }
</style>