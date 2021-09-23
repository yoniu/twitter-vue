<template lang="pug">
//- 管理页面头部
.admin-header
  h2 Hello, {{currentUser.getUsername()}}
  router-link.gravatar(
    to="/admin/profile"
  )
    img(
      :src="gravatar()"
      :alt="currentUser.getUsername()"
    )
</template>

<script setup>
import md5 from 'md5-js'; // md5JS插件
const prop = defineProps(['currentUser']);

const gravatar = () => {
  return `https://cdn.helingqi.com/wavatar/${md5(prop.currentUser.getEmail())}?s=&d=mm&r=g`;
};

</script>

<style lang="less" scoped>
.admin-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .8rem;

  .gravatar>img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  &>*{
    flex: 0 1 auto;
    padding: 0;
    margin: 0;
  }
}
</style>