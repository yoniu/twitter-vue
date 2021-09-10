import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Post from '../pages/Post.vue';

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/post/:id',
    component: Post,
    meta: {
      title: '正文'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
})

export default router;