<template>
  <v-card class="elevation-12 pb-2">
      <v-card-title class="headline font-weight-light"></v-card-title>
      <v-card-text>
          <v-calendar-weekly
          v-model="date"
            :rules="DateRules"
          label="Date"
          required
          />
      </v-card-text>
      <v-card-actions>
          <v-btn
        :disabled="!valid || loading"
        :loading="loading"
        color="success"
        class="mr-4"
        @click="addOrder"
          >добавить</v-btn>
      </v-card-actions>
  </v-card>
</template>
<script>
export default {
      data() {
    return {
      valid: false,
      username: "",
      password: "",
      dateRules: [v => !!v || "Поле Login обязательно"],//добавить проверку на +7 или 8 те номер телефона
    }
      },
    methods:{
    async addOrder()
    {

    }
}
}
</script>

<style>

</style>