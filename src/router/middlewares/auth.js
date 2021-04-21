export default function auth({ store, next }) {
  if (store.getters['auth/isLoggedIn']) {
    return next();
  }

  return next({ name: 'Login' });
}
