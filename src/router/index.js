import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/pages/Login.vue';

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'Login',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
