<template>
  <form>
    <h1>Registration</h1>
    <Notification :message="error" v-if="error"/>
   <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">Telephone number</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="username"
                  v-model="username"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                  required
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Register</button>
            </div>
          </form>

            <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/login">Login</nuxt-link>
            </div>
            <div class="has-text-centered" style="margin-top: 20px">
            Do not want to? <nuxt-link to="/">Home</nuxt-link>
            </div>
  </form>
</template>

<script>
import Notification from '~/components/notification'
export default {
  layout:"empty",
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

}
</script>
