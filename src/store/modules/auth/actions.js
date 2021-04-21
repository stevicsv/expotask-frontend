import { createSession, login, logout } from '@/repositories/auth';

import { types } from './mutations';

export default {
  async login({ commit }, credentials) {
    await createSession();
    const resp = await login(credentials);
    const { data } = resp.data;
    localStorage.setItem('user', JSON.stringify(data));
    commit(types.setUser, data);
  },

  async logout({ commit }) {
    await logout();
    localStorage.removeItem('user');
    commit(types.setUser, null);
  },
};
