<template lang="pug">
#container
  twitter-nav/
  router-view#main
  twitter-sidebar/
</template>

<script setup>
import { useStore } from 'vuex'
import {
  GET_NAVIGATION,
  GET_OPTIONS
} from './store/actionType'

import twitterNav from './components/nav/index.vue';
import twitterSidebar from './components/sidebar/index.vue';

const store = useStore();
store.dispatch(GET_NAVIGATION);
store.dispatch(GET_OPTIONS);

</script>

<style>
  :root{
    --themeColor: rgb(29, 161, 242);
    --themeColorOp: rgba(29, 161, 242,.1);
    --bgColor: #fff;
    --bgColorOp: rgb(255,255,255,.9);
    --border: rgb(230, 236, 240);
    --shadow: rgba(0,0,0,.25);
    --time: #818181;
    --aColor: rgb(20, 23, 26);
    --highLight: #fff;
    --contentColor: #324b64;
    --contentBackground: rgb(245,248,250);
    --contentColor2: rgb(101,119,134);
  }
  body{
    background: var(--bgColor);
    color: var(--aColor);
    margin: 0px auto 0px;
    padding: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.8;
  }
  #container{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 275px 2fr 1fr;
  }
  #main{
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
  }
</style>
