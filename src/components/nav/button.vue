<template lang="pug">
router-link(
  to="/admin"
)
  span 管理
</template>

<style scoped>
a{
  display: block;
  width: 100%;
  margin-top: 1.4rem;
  padding: 1rem;
  background-color: var(--themeColor);
  color: var(--highLight);
  border-radius: 9999px;
  font-size: .9rem;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 10px 20px 0px var(--border);
}
</style>