import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'

// 引用图标文件
import './assets/js/iconfont'

createApp(App)
  .use(Router)
  .use(store)
  .mount('#app')
