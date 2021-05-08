export const getters = {
  isAuthenticated(state) {
    return state.auth;
  },

  loggedInUser(state) {
    return state.user;
  },
  UsersId(state) {
    return state.auth;
  }
};
export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setMessage(state, payload) {
    state.message = payload;
    state.error = false;
  },
  clearMessage(state) {
    state.message = null;
    state.error = false;
  }
};
export const state = () => ({
  loading: false,
  error: null,
  message: null
});
export const actions = {
  nuxtServerInit({ dispatch }) {
    dispatch("auth/autoLogin");
  }
};
