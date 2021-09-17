<template lang="pug">
//- Iconfont图标
svg(
  class="icon"
  aria-hidden="true"
)
  use(
    :xlink:href="`#icon-${icon}`"
  )
</template>

<script>
export default {
  props: ['icon']
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>