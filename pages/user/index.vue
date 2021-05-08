<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user of users.value" :key="user.Логин">
        <a href="#" @click.prevent="openUser(user)">{{ user.Description }} </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Profile",
  middleware: ["auth"],
  async fetch({ store, error }) {
    try {
      store.commit("setLoading", true);
      if (store.getters["order/ordersList"].length === 0) {
        user = btoa(store.getters["auth/token"]).split(":");
        await store.dispatch("order/fetchZakById", user[0]);
      }
    } catch (e) {
      store.commit("setError", e, { root: true });
    } finally {
      store.commit("setLoading", false);
    }
  },
  data: () => ({ pageTitle: "Users page" }),
  computed: {
    users() {
      return this.$store.getters["order/ordersList"];
    }
  },
  methods: {
    openUser() {
      this.$router.push("/user/klient" + this.user.id);
    }
  }
};
</script>
