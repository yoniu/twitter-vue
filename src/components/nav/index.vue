<template lang="pug">
div#left
  router-link.twitter-nav-avatar(to="/")
    img(
      :src="options?.site_icon"
      :alt="options?.site_name"
    )
  .twitter-nav-list
    twitter-nav-list(
      v-for="item in navItems"
      :key="item.get('objectId')"
      :item="item"
    )/
</template>

<script setup>

import {defineProps} from 'vue';
const props = defineProps(['navItems', 'options']);

import twitterNavList from './list.vue';

</script>

<style lang="less" scoped>
  #left{
    position: sticky;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;

    .twitter-nav-avatar{
      padding: .8rem;
      margin-bottom: .5rem;
      border-radius: 50%;
      line-height: 0;
      img{
        width: 40px;
        height: 40px;
      }
      &:hover{
        background-color: var(--themeColorOp);
      }
    }

    .twitter-nav-list{
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
</style>