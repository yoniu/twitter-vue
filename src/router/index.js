import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Post from '../pages/Post.vue';
import Admin from '../pages/Admin/index.vue';
import AdminProfile from '../pages/Admin/profile.vue';
import AdminPostList from '../pages/Admin/postList.vue';
import AdminSetting from '../pages/Admin/setting.vue';
import AdminWrite from '../pages/Admin/write.vue';
import AdminComment from '../pages/Admin/comment.vue';
import AdminHome from '../pages/Admin/home.vue';

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
        path: '',
        component: AdminHome
      },
      {
        path: 'profile',
        component: AdminProfile
      },
      {
        path: 'setting',
        component: AdminSetting
      },
      {
        path: 'twitterList',
        component: AdminPostList
      },
      {
        path: 'write',
        component: AdminWrite
      },
      {
        path: 'comment',
        component: AdminComment
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