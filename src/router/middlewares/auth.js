export default function auth({ store, next }) {
  if (store.getters.isLoggedIn) {
    return next();
  }

  return next({ name: 'Login' });
}
