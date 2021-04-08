import { createStore } from 'vuex';
import { createSession, login, logout } from '@/repositories/auth';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      await createSession();
      const resp = await login(credentials);
      const { data } = resp.data;
      localStorage.setItem('user', JSON.stringify(data));
      commit('SET_USER', data);
    },

    async logout({ commit }) {
      await logout();
      localStorage.removeItem('user');
      commit('SET_USER', null);
    },
  },
});
