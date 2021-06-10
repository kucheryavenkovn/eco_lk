<template>
  <v-card class="elevation-12 pb-2">
    <v-card-title class="headline font-weight-light"></v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" validation class="mt-4">
        <v-calendar-weekly
          v-model="date"
          :rules="DateRules"
          label="Date"
          placeholder="Pick a day"
          required
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :disabled="!valid || loading"
        :loading="loading"
        color="success"
        class="mr-4"
        @click.native="addOrder"
        >добавить</v-btn
      >
      <v-btn color="success" class="mr-4" @click="abort">Обратно</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      valid: false,
      date: null,
      dateRules: [
        v => !!v || "Поле Login обязательно",
        v =>
          v > Date.getTime() + 7 ||
          "Слишком рано, минимум 7 дней от текущей даты"
      ]
    };
  },
  methods: {
    async addOrder() {
      if (this.$refs.form.validate()) {
        this.$store.commit("setLoading", true);
        try {
          await this.$store.dispatch("one/newOrder", this.date);
          await this.$router.push("/user");
        } catch (e) {
          this.$store.commit("setError", e);
        } finally {
          this.$store.commit("setLoading", false);
        }
      }
    },
    async abort() {
      this.$router.push("/user");
    }
  }
};
</script>

<style></style>
