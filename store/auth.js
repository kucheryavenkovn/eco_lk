import Cookie from "cookie";
import Cookies from "js-cookie";

export const getters = {
  isAuthenticated: (state) => Boolean(state.token),
  token: (state) => state.token,
};

export const mutations = {
  authAccess(state, token) {
    state.token = token;
    Cookies.set("token", token);
  },
  logoutUser(state) {
    state.token = null;
    Cookies.remove("token");
  }
};

export const state = () => ({
  token: null
});

export const actions = {
  async registerUser({ store, commit }, payload) {
    try {
      await store.dispatch("/user/sendUser", {
        username: payload.username,
        password: payload.password
      });

      const user1 = await store.dispatch(
        "user/fetchUserById",
        payload.username
      );
      if (
        user1.value.Логин === payload.username &&
        user1.value.Пароль === payload.password
      ) {
        commit(
          "authAccess",
          "Basic" + btoa(payload.username + ":" + payload.password)
        );
        commit(
          "setMessage",
          "Вы успешно зарегестрировались в личном кабинете",
          { root: true }
        );
      }
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  },
  logoutUser({ commit }) {
    try {
      commit("logoutUser");
      commit("setMessage", "Вы вышли из личного кабинета", { root: true });
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  },
  autoLogin({ commit }) {
    // eslint-disable-next-line no-undef
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie;
    const cookies = Cookie.parse(cookieStr || "") || {};
    const token = cookies.token;

    if (token) {
      commit('authAccess', token);
    } else {
      commit("logoutUser");
    }
  },
  async loginUser({ store, commit }, payload) {
    try {
      const user1 = await store.dispatch(
        "user/fetchUserById",
        payload.username
      );
      if (
        user1.value.Логин === payload.username &&
        user1.value.Пароль === payload.password
      ) {
        commit(
          "authAccess",
          "Basic" + btoa(user1.value.kod + ":" + payload.password)//поменять на нормальное значение
        );
        commit(
          "setMessage",
          "Вы успешно зарегестрировались в личном кабинете",
          { root: true }
        );
      }
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  }
};
