<template>
  <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn v-for="item in links" :key="item.title" plain :to="item.url">
        {{ item.title }}
      </v-btn>
      <v-btn v-if="isLogedIn" plain @click="onLogout">
        Выйти
      </v-btn>
      <v-spacer />
    </v-app-bar>
</template>

<script>
export default {
name:"MainMenu",
 computed: {
    isLogedIn() {
      return this.$store.getters['auth/isAuthenticated'];
    },
    links() {
      if (!this.isLogedIn) {
        return [
          { title: "Главная", icon: "mdi-home", url: "/" },
          { title: "О нас", icon: "mdi-home", url: "/about" },
          { title: "Войти", icon: "mdi-home", url: "/login" },
          { title: "Зарегестрироваться", icon: "mdi-home", url: "/reg" }
        ];
      } else {
        return [
          { title: "Главная", icon: "mdi-home", url: "/" },
          { title: "О нас", icon: "mdi-home", url: "/about" },
          { title: "Профиль", icon: "mdi-home", url: "/user" }
        ];
      }
    }
  },
  methods: {
    onLogOut() {
      
      this.$store.dispatch('auth/logoutUser');
      this.$router.push("/");
    }
  }
}
</script>

<style>

</style>