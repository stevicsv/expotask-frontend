export const types = {
  setUser: 'SET_USER',
};

export default {
  [types.setUser](state, user) {
    state.user = user;
  },
};
