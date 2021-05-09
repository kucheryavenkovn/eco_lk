<template>
  <v-card class="elevation-12 pb-2">
    <v-card-title class="headline font-weight-light">Регистрация</v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" validation class="mt-4">
        <v-text-field
          v-model="username"
          :rules="usernameRules"
          label="Login"
          placeholder="Ваш логин"
          required
          type="text"
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :counter="true"
          label="Пароль"
          required
          type="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :disabled="!valid || loading"
        :loading="loading"
        color="success"
        class="mr-4"
        @click="onReg"
      >
        Войти
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "RegForm",
  data() {
    return {
      valid: false,
      username: "",
      password: "",
     usernameRules: [v => !!v || "Поле Login обязательно",
      v => /^\+7|8*/.test(v) || 'Номер телефона должен начинатся с 8 или +7',
      v => (v.length >= 10 && v.length<=11) || "Проверте набранный номер",
      ],
      passwordRules: [
        v => !!v || "Пароль обязателен",
        v => v.length >= 5 || "Пароль обязательно должен содержать 5 символов"
      ]
    };
  },
computed: {
    loading() {
      return this.$store.getters.loading;
    },
    methods: {
      async onReg() {
        if (this.$refs.form.validate()) {
          this.$store.commit("setLoading", true);
          
          try {
            await this.$store.dispatch("auth/loginUser", {
              username: this.username,
              password: this.password
            });
            await this.$router.push("/user");
          } catch (e) {
            this.$store.commit('setError',e)
          } finally {
            this.$store.commit("setLoading", false);
          }
        }
      }
    }
  }
};
</script>

<style></style>
