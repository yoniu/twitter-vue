<template lang="pug">
.router-list
  router-link(to="/admin") 首页
  router-link(to="/admin/write") 发推
  router-link(to="/admin/twitterList") 推文
  router-link(to="/admin/comment") 评论
  router-link(to="/admin/setting") 设置
  a(
    href="javascript:;"
    @click="logoutAdmin"
  ) 退出
</template>
<script setup>
const emit = defineEmits(['logout']);
function logoutAdmin(){
  emit('logout');
}
</script>
<style lang="less" scoped>
.router-list{
  display: flex;
  align-items: center;
  padding: 0 .8rem .5rem;
  border-bottom: 1px solid var(--border);
  overflow-y: overlay;

  a{
    flex: 0 0 auto;
    display: block;
    line-height: 1;
    padding: .2rem 0;
    margin-left: 1rem;
    color: var(--aColor);
    text-decoration: none;
    border-radius: 5px;
    transition: .3s box-shadow ease-in-out, .3s color ease-in-out;

    &[aria-current]{
      color: var(--themeColor);
      box-shadow: inset 0 -.7rem var(--themeColorOp);
    }
    &:hover{
      color: var(--themeColor);
      box-shadow: inset 0 -.7rem var(--themeColorOp);
    }
    &:first-child{
      margin-left: 0;
    }
  }
}
</style>