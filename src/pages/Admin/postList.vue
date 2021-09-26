<template lang="pug">
.setting-post-list
  n-data-table(
    :columns="columns"
    :data="data"
    :pagination="pagination"
  )
</template>

<script setup>
import { h } from 'vue'
import { NButton, NDataTable } from 'naive-ui'
const createColumns = () => {
  return [
    {
      title: '正文',
      key: 'text',
      ellipsis: true
    },
    {
      title: '日期',
      key: 'date'
    },
    {
      title: '操作',
      key: 'actions',
      render (row) {
        return h(
          NButton,
          {
            size: 'small'
          },
          { default: () => 'Send Email' }
        )
      }
    }
  ]
}
const data = [];
const columns = createColumns();
const pagination = { pageSize: 10 };
</script>

<style scope>
  .setting-post-list{
    padding: .8rem;
  }
</style>