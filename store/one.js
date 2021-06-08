export const getters = {};
export const mutations = {};
export const state = () => ({});
export const actions = {
  async newOrder({ store }, date) {
    try {
        const user = (store.getters["auth/token"]).split(":");
        await store.dispatch("orders/fetchZakById", user[0]);
      await this.$axios.post(
        "http://10.10.0.22/lkrest/odata/standard.odata/Catalog_Контрагенты?$format=json",
        {
          Контрагент: user[0],
          СтатусЗаказа: "Новый",
          ДатаВывоза: date

        },
        commit("order/clearOrders")
      );
    } catch (error) {
      throw error;
    }
  }
};
