<template lang="pug">
.main 
  .banner
    span 后台管理
    a(href="javascript:;")
      icon(icon="thunderbolt")
  twitter-login(
    v-if="!isLogin"
    @show-message="showMessage"
  )
  #twitter-admin(
    v-if="isLogin"
  )
    twitter-admin-header(
      :currentUser="currentUser"
    )
    twitter-admin-navigation(
      @logout="loginOut"
    )
    router-view
</template>

<script setup>
import icon from '../../components/icon.vue'; // 图标组件
import twitterLogin from '../../components/admin/login.vue'; // 登陆组件
import twitterAdminHeader from '../../components/admin/header.vue'; // 头部组件
import twitterAdminNavigation from '../../components/admin/navigation.vue'; // 导航组件
import { useMessage } from 'naive-ui'; // Naive UI的信息组件
import { ref, computed, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { GET_CURRENT_USER, LOGOUT } from '../../store/actionType'; // VueX的Action名，获取当前登陆用户

const store = useStore();
store.dispatch(GET_CURRENT_USER); // VueX 获取当前用户
const currentUser = computed(() => store.state.currentUser); // 当前用户的计算属性
const isLogin = ref(false); // 登陆状态
const message = useMessage();

function showMessage(text) {
  // 信息显示
  message.info(
    text,
    { closable: true, duration: 5000 }
  );
}

async function loginOut(){
  store.dispatch(LOGOUT);
  showMessage('退出成功');
}

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