<template lang="pug">
.setting-form
  setting-base
</template>

<script setup>
import settingBase from '../../components/admin/setting/base.vue'
</script>

<style lang="less">
.setting-form{
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: .8rem;
  .setting-title{
    margin-bottom: .5rem;
    font-size: 1.1rem;
    font-weight: bolder;
  }
  .setting-item{
    margin-bottom: .5rem;
    label{
      display: flex;
      flex-direction: column;

      span{
        font-weight: bold;
        margin-bottom: .5rem;
      }
      input[type=text]{
        padding: .5rem;
        border: 1px solid var(--border);
        border-radius: 5px;
        color: var(--contentColor);
        outline: none;
        appearance: none;
        -webkit-appearance: none;

        &:focus{
          border-color: var(--themeColor);
        }
      }
    }
    &>span{
      display: block;
      font-size: .9rem;
      color: var(--contentColor2);
      margin-top: .3rem;
    }
  }
  .btn-primary{
    display: block;
    padding: .6rem .8rem;
    line-height: 1;
    border-radius: 5px;
    background-color: var(--themeColor);
    color: var(--highLight);
    text-decoration: none;
    float: right;
  }
}
</style>