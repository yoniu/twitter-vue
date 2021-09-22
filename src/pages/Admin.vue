<template lang="pug">
.main 
  .banner
    span 后台管理
    a(href="javascript:;")
      icon(icon="thunderbolt")
  .login(
    v-if="!isLogin"
  )
    twitter-login
</template>

<script setup>
import icon from '../components/icon.vue' // 图标组件
import twitterLogin from '../components/admin/login.vue' // 登陆组件
import { ref, computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { GET_CURRENT_USER } from '../store/actionType' // VueX的Action名，获取当前登陆用户

const store = useStore();
store.dispatch(GET_CURRENT_USER); // VueX 获取当前用户
const currentUser = computed(() => store.state.currentUser); // 当前用户的计算属性

const isLogin = ref(false); // 登陆状态

watchEffect(() => {
  // 监听当前登陆用户。
  if(currentUser.value && !('err' in currentUser.value)){
    isLogin.value = true;
  }else{
    isLogin.value = false;
  }
});

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