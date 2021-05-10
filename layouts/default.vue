<template>
  <v-app dark>
    <main-menu />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <progressing/>
    <info-vue />
  </v-app>
</template>

<script>
import infoVue from "~/components/info.vue";
import progressing from "~/components/progress.vue";
import mainMenu from "~/components/mainmenu.vue";
export default {
  components: {
    infoVue,
    progressing,
    mainMenu
  },
  data() {
    return {
      title: "АО <ЭКО-Комплекс>"
    };
  },
 
};
</script>
