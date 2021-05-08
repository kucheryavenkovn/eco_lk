export const actions = {
  async fetchZakById({commit}, userId) {
    try {
      user = await this.$axios.$get(
        "http://127.0.0.1/1ib/odata/standard.odata/Document_%D0%97%D0%B0%D0%BA%D0%B0%D0%B7$format=json" +
          encodeURI("$filter=Логин eq ") +//там не логин поменять
          "'" +
          encodeURI(userId) +
          "'"
      )
      commit('setOrders', user.value);
    } catch (error) {
      throw error;
    }
  },
  async sendZak({}, user) {
    try {
      await this.$axios.post(
        "http://127.0.0.1/1ib/odata/standard.odata/Catalog_Контрагенты?$format=json",
        {
          data: user.data
        }
      );
    } catch (error) {
      throw error;
    }
  },  
  async deleteOrder({},user)
  {
    try{
    await this.$axios.DELETE()
  }
  catch(e)
  {}
}
};

export const getters = {
  ordersList:(state)=> state.ordersList,
};

export const mutations = {
  setOrders(state,users)
  { state.ordersList = users}
};

export const state = () => ({
ordersList:[],

});