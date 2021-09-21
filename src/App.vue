<template lang="pug">
#container
  twitter-nav(
    :navItems="navItems"
    :options="options"
  )
  router-view#main
  twitter-sidebar/
twitterLoading(
  :class="{ hide: loaded }"
)
</template>

<script setup>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
import {
  GET_NAVIGATION,
  GET_OPTIONS
} from './store/actionType' // VueX的Action名

import twitterNav from './components/nav/index.vue' // 导航组件
import twitterSidebar from './components/sidebar/index.vue' // 侧栏组件

import twitterLoading from './components/loading.vue' // 页面加载遮罩组件

// VueX获取数据
const store = useStore();
store.dispatch(GET_NAVIGATION);
store.dispatch(GET_OPTIONS);
const navItems = computed(() => store.state.navigation);
const options = computed(() => store.state.option);

// 判断数据是否加载完毕
const loaded = ref(false);
watch([navItems, options], ([NavItems, Options])=>{
  if(Options === undefined || NavItems === undefined) return;
  if(Object.keys(Options).length>0 && NavItems.length>0) loaded.value = true;
});

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
  *, *::before, *::after{
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  body{
    background: var(--bgColor);
    color: var(--aColor);
    margin: 0px auto 0px;
    padding: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.8;
  }
  #app{
    min-height: 100vh;
  }
  #container{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 275px 2fr 1fr;
    min-height: 100vh;
  }
  #main{
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
  }
</style>
