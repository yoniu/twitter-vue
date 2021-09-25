<template lang="pug">
.login-form
  .form-title 登陆
  .form-item
    input#username(
      type="text"
      name="username"
      placeholder="账号"
      v-model="formData.username"
    )
  .form-item
    input#password(
      type="password"
      name="password"
      placeholder="密码"
      v-model="formData.password"
      @keyup.enter="login"
    )
  .form-item.button-item
    a.primary-button(
      :class="{ login: pressLoginButton }"
      @click="login"
    )
      twitterIcon(:icon="pressLoginButton ? 'reload' : 'right'")
</template>

<script setup>
  import { reactive, ref, computed } from 'vue';
  import { useStore } from 'vuex';
  import { LOGIN } from '../../store/actionType'; // VueX的Action名，登陆事件
  import twitterIcon from '../icon.vue'; // 图表组件

  const emit = defineEmits(['show-message']); // 显示消息自定义事件
  const store = useStore();
  const formData = reactive({
    username: '',
    password: ''
  });
  const pressLoginButton = ref(false);
  const currentUser = computed(() => store.state.currentUser);

  async function login(){
    if(pressLoginButton.value) return;
    pressLoginButton.value = !pressLoginButton.value;
    if(formData.username == '' || formData.password == ''){
      pressLoginButton.value = !pressLoginButton.value;
      return emit('show-message', '账号密码不能为空');
    }
    await store.dispatch(LOGIN, formData);
    if('err' in currentUser.value){
      emit('show-message', currentUser.value.err);
      pressLoginButton.value = !pressLoginButton.value;
      formData.username = '';
      formData.password = '';
    }else{
      emit('show-message', "登陆成功");
    }
  }
</script>

<style lang="less" scoped>
.login-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  width: 90%;
  margin: 2rem auto;

  .form-title{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .form-item:not(.button-item){
    display: flex;
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: 1px solid var(--border);
    margin-bottom: 1rem;
    background-color: var(--bgColor);
    transition: .3s border-color ease-in-out;
    input{
      flex: 1 1 auto;
      outline: none;
      border: 0;
      padding: 0 1rem;
      font-size: 1rem;
      color: var(--aColor);
      background-color: transparent;

    }

    &:hover{
      border-color: var(--themeColor);
    }
  }
  .primary-button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: var(--themeColor);
    color: var(--highLight);
    border-radius: 50%;
    cursor: pointer;
    &:hover{
      opacity: .8;
    }
    &.login{
      cursor: wait;
      animation: 3s circle-round infinite linear;
    }
  }

  @keyframes circle-round {
    from {
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
}
</style>