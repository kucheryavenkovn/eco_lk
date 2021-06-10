export const state = () => ({
  zak: []
});
export const mutations = {
  setZak(state, Zak) {
    state.zak = Zak;
  }
};
export const actions = {
  async fetchUsers() {
    try {
      const user = await this.$axios.get(
        " /Catalog_Контрагенты?$format=json"
      );
      return user;
    } catch (error) {
      throw error;
    }
  },
  async fetchUserById({}, userID) {
    try {
      const user = await this.$axios.get(
        " /" +
          encodeURI("Catalog_Контрагенты?$format=json&$filter=Логин eq ") +
          "'" +
          encodeURI(userID) +
          "'"
      );
      return user;
    } catch (error) {
      throw error;
    }
  },
  async sendUser({}, user) {
    try {
      await this.$axios.post(
        " /Catalog_Контрагенты?$format=json",
        {
          Логин: user.username,
          Пароль: user.password,
          Description: user.name
        }
      );
    } catch (error) {
      throw error;
    }
  },
  async fetchZakById({}, userId) {
    try {
      return await this.$axios.$get(
        " /Document_%D0%97%D0%B0%D0%BA%D0%B0%D0%B7$format=json" +
          encodeURI("$filter=Логин eq ") +
          "'" +
          encodeURI(userId) +
          "'"
      );
    } catch (error) {
      throw error;
    }
  }
};
export const getters = {
  zak: state => state.zak
};
