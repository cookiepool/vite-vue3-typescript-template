import { createStore } from 'vuex';

export default createStore({
  state: {
    roleName: 'admin'
  },
  mutations: {
    MODIFY_ROLE_NAME: (state, payload) => {
      state.roleName = payload;
    }
  },
  actions: {},
  modules: {}
});
