<template lang="pug">
#write
  .write-item
    textarea(
      rows="5"
    )
  .fast-input
    a(href="javascript:;", title="插入表情")
      twitter-icon(icon="smile")
    a(href="javascript:;", title="插入视频")
      twitter-icon(icon="video")
    a(href="javascript:;", title="插入音乐")
      twitter-icon(icon="customerservice-fill")
    a(href="javascript:;", title="插入图片")
      twitter-icon(icon="image")
    a(href="javascript:;", title="置顶")
      twitter-icon(icon="pushpin")
    .push-item
      a.btn-primary(href="javascript:;") 发布
</template>

<script setup>
import twitterIcon from '../../components/icon.vue'
</script>

<style lang="less" scoped>
#write{
  padding: .8rem;

  .write-item{
    margin-bottom: .5rem;
    
    textarea{
      font-family: inherit;
      width: 100%;
      font-size: 1.1rem;
      padding: .5rem;
      color: var(--contentColor);
      border: 1px solid var(--border);
      border-radius: 5px;
      resize: vertical;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;

      &:focus{
        border-color: var(--themeColor);
      }
    }
  }
  .fast-input{
    display: flex;
    align-items: center;

    &>a{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      margin-right: .5rem;
      border-radius: 50%;
      color: var(--themeColor);
      font-size: 1.5rem;
      transition: .3s background-color ease-in-out;

      &:hover{
        background-color: var(--themeColorOp);
      }
      &:last-child{
        margin-right: 0;
      }
    }
    .push-item{
      flex: 1 1 auto;
      text-align: right;
      .btn-primary{
        display: inline-block;
        line-height: 1;
        padding: .6rem .8rem;
        border-radius: 5px;
        background-color: var(--themeColor);
        color: var(--highLight);
        text-decoration: none;
      }
    }

  }
}
</style>