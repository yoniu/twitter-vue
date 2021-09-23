import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Post from '../pages/Post.vue';
import Admin from '../pages/Admin/index.vue';
import AdminProfile from '../pages/Admin/profile.vue';
import AdminPostList from '../pages/Admin/postList.vue';

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
    component: Admin,
    children: [
      {
        path: 'profile',
        component: AdminProfile
      },
      {
        path: 'twitterList',
        component: AdminPostList
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
})

export default router;