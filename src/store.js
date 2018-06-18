import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    isAuthenticated: !!localStorage.getItem('token'),
  },

  getters: {
    isAuthenticated (state) {
      return state.isAuthenticated;
    },

    user(state) {
      if (!state.isAuthenticated) {
        return false;
      }

      return JSON.parse(localStorage.getItem('user'));
    }
  },

  mutations: {
    authenticate (state, payload) {
      state.isAuthenticated = true;

      localStorage.setItem('token', payload.api_token);
      localStorage.setItem('user', JSON.stringify({
        'id': payload.id,
        'first_name': payload.first_name,
        'last_name': payload.last_name,
        'email': payload.email,
      }));
    },

    updateUser (state, payload) {
      localStorage.setItem('user', JSON.stringify({
        'id': payload.id,
        'first_name': payload.first_name,
        'last_name': payload.last_name,
        'email': payload.email,
      }));
    },

    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },

  actions: {

    login (context, payload) {
      context.commit('authenticate', payload);
    },

    updateUser (context, payload) {
      context.commit('updateUser', payload);
    },

    logout (context) {
      context.commit('logout');
    },
  }
})
