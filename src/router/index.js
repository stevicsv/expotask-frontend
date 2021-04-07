import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/pages/Login.vue';
import Dashboard from '@/pages/Dashboard.vue';

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'Login',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
