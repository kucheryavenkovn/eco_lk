<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <div class="text-center">
        <reg-form />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import RegForm from "~/components/RegForm.vue";
export default {
  name: "Regestration",
  components: { RegForm }
  /*  layout:"empty",
  components: {
    Notification,
  },
 data() {
    return {
       username: '',
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async register() {
      try {
        await store.dispatch('/user/sendUser',{
          username: this.username,
          password: this.password
        })

        const user1 = await store.dispatch('user/fetchUserById', this.username) 
        if (user1.value.Логин === this.username && user1.value.Пароль === this.password) {
          store.mutations('setLog', true)
          store.mutations('setUser', user1.value.Description)
          store.mutations('setId', user1.value.Контрагент_Key)
          this.$router.push('/')
        } else {
         this.$router.go(0)
        }

        this.$router.push('/')
      }
      catch (e)
      {
        this.error=  
        e.response.data.message
      }
  }
}
*/
};
</script>
