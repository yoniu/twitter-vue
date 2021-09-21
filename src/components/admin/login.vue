<template lang="pug">
.login-form
  .form-title 登陆
  .form-item
    input#username(
      type="text"
      name="username"
      placeholder="账号"
    )
  .form-item
    input#password(
      type="text"
      name="password"
      placeholder="密码"
    )
  .form-item.button-item
    button.primary-button 登陆
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useMessage } from 'naive-ui'

export default defineComponent({
  setup () {
    const formRef = ref(null)
    return {
      formRef
    }
  }
});
</script>

<style lang="less" scoped>
.login-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  width: 90%;
  margin: 0 auto;

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
}
</style>