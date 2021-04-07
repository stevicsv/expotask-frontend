import { createStore } from 'vuex';
import { createSession, login } from '@/repositories/auth';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
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
  },
});
