<template>
  <div>
    <input type="text" v-model="user.email">
    <input type="text" v-model="user.password">
    <b-button class="btn btn-submit" @click="loginUser">Login</b-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: {
        email: 'email@gmail.com',
        password: '123456798'
      }
    }
  },
  methods: {
    loginUser() {
      this.axios.post('/login', this.user)
      .then(response => {
          console.log(response)
      }).catch(error => {
        console.log(error);
      })
    },
  }
}
</script>

<style scoped>

</style>
