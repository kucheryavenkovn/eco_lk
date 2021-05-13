<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-btn class="mb-2" @click="addItem">Новый заказ</v-btn>
      <v-data-table
        :headers="headers"
        :items="orders"
        sort-by="date"
        class="elevation-1"
      >
        <template #item.date="{item}">
          {{ new Date(item.ДатаВывоза).toLocaleString }}
        </template>
        <template #item.actions="item">
          <v-icon
            v-if="item.status === 'новый'"
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            v-if="item.status === 'новый'"
            small
            class="mr-2"
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Profile",
  middleware: ["auth"],
  data: () => ({
    headers: [
      {
        Text: "Наименование",
        align: "start",
        sortable: false,
        value: "title"
      },
      {
        Text: "Дата",
        value: "date"
      },
      {
        Text: "Статус",
        value: "status"
      },
      {
        Text: "Действия",
        align: "actions",
        sortable: false,
        value: "end"
      }
    ]
  }),
  async fetch({ store }) {
    store.commit("setLoading", true);
    try {
      if (store.getters["orders/ordersList".length === 0]) {
        const user = btoa(store.getters["auth/token"]).split(":");
        await store.dispatch("orders/fetchZakById", user[0]); //поменять если буду использовать плагин
      }
    } catch (e) {
      console.log(e);
      store.commit("setError", e);
    } finally {
      store.commit("setLoading", false);
    }
  },
  computed: {
    orders() {
      return this.$store.getters["orders/ordersList"];//проверить
    }
  },
  methods: {
    editItem(item) {
      this.$router.push(`user/order/${item.Контрагент_Key}`);
    },
    deleteItem(item) {
      this.$store.commit("setLoading", true);
      this.$store.dispatch("order/deleteOrder", item.id).then(() => {
        //  const user = btoa(store.getters["auth/token"]).split(":");
        this.$store.dispatch("orders/fetchZakById", item.Контрагент_Key); //заменить на правильное
        this.$store.commit("setLoading", false);
      });
    },
    addItem() {
      this.$store.commit("order/clearOrder");
      this.$router.push("user/order/new");
    }
  }
};
</script>

<style></style>
