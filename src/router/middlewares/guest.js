export default function guest({ store, next }) {
  if (!store.getters['auth/isLoggedIn']) {
    return next();
  }

  return next({ name: 'Dashboard' });
}
