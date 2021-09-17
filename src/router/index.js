import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Post from '../pages/Post.vue';
import Admin from '../pages/Admin.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/post/:id',
    component: Post
  },
  {
    path: '/admin',
    component: Admin
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
})

export default router;