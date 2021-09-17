<template lang="pug">
//- 导航列表（单个）
//- 相同的代码放一起
//- 如果type为link用a标签输出，如果为route就用router-link标签输出
mixin sameCode(item)
  .nav-link-item
    twitterIcon(
      :icon="item.get('icon') ? item.get('icon') : 'link'"
    )
    span {{ item.get('title') }}

a(
  v-if="item.get('type') === 'link'"
  :href="item.get('url')"
  :title="item.get('description')"
  target="_blank"
).nav-link
  +sameCode(item)

router-link(
  v-if="item.get('type') === 'route'"
  :to="item.get('url')"
  :title="item.get('description')"
).nav-link
  +sameCode(item)

</template>

<script setup>
import twitterIcon from '../icon.vue'; // 图标组件
import { defineProps } from 'vue';
const props = defineProps(['item']);
</script>

<style lang="less" scoped>
  .nav-link{
    text-decoration: none;

    .nav-link-item{
      display: inline-flex;
      align-items: center;
      padding: 12px;
      border-radius: 9999px;
      color: var(--aColor);
      transition: .3s background ease-in-out, .3s color ease-in-out;
      font-size: 1.1rem;

      svg{
        width: 1.2rem;
        height: 1.2rem;
      }
      span{
        margin: 0 1rem;
      }
    }

    &:hover .nav-link-item{
      color: var(--themeColor);
      background-color: var(--themeColorOp);
    }
  }
</style>