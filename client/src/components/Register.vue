<template>
<v-layout column>
  <v-flex xs6 offest-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="red" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <input type="text" name="email" v-model="email" placeholder="email" />
        <input type="password" name="password" v-model="password" placeholder="password" />
        <br>
        <div class="error" v-html="error" />
        <button @click="register">Register</button>
      </div>
    </div>
  </v-flex>
</v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
