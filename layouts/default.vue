<template>
  <v-app dark>
    <main-menu>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <progress-vue />
    <info-vue />
  </v-app>
</template>

<script>
import infoVue from "~/components/info.vue";
import progressVue from "~/components/progress.vue";
import mainMenu from "~/components/mainmenu.vue";
export default {
  components: {
    infoVue,
    progressVue,
    mainMenu
  },
  data() {
    return {
      title: "АО <ЭКО-Комплекс>"
    };
  },
 
};
</script>
