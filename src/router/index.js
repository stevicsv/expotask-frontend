/* eslint-disable import/no-cycle */
import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

// Page imports
import Login from '@/pages/Login.vue';
import Dashboard from '@/pages/Dashboard.vue';

// Middleware imports
import auth from './middlewares/auth';
import guest from './middlewares/guest';

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'Login',
    meta: {
      middleware: guest,
    },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
    meta: {
      middleware: auth,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      store,
      to,
    };

    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
