<template lang="pug">
.setting-title 基本设置
.setting-item
  label
    span 站点标题
    input(
      type="text"
      placeholder="必填"
    )
  span 站点的名称将显示在网页的标题处
.setting-item
  label
    span 站点描述
    input(
      type="text"
      placeholder="必填"
    )
  span 站点描述将显示在网页代码的头部
.setting-item
  label
    span 站点图标
    input(
      type="text"
    )
  span 显示在导航列表上面的图标，填写图片链接，默认为 assets/icon.png
.setting-item
  a.btn-primary(
    href="javascript:;"
  ) 保存设置
</template>