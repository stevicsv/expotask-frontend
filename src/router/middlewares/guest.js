export default function guest({ store, next }) {
  if (!store.getters.isLoggedIn) {
    return next();
  }

  return next({ name: 'Dashboard' });
}
