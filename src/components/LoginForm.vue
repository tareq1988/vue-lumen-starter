<template>
  <form class="form form-login" @submit.prevent="login">
    <div class="alert alert-danger" v-if="infoError">Invalid email or password. Please try again.</div>

    <div :class="{'is-waiting': sending}">
      <div class="form-group">
        <label for="login-email">Email address</label>
        <input v-model.trim="email" class="form-control" id="login-email" name="email" type="email" placeholder="E-mail address" tabindex="1" required>
      </div>

      <div class="form-group">
        <label for="login-pass" class="d-block">Password <router-link to="/lost-password" class="float-right small" tabindex="4">Lost your password?</router-link></label>
        <input v-model.trim="password" class="form-control" id="login-pass" name="password" type="password" placeholder="Password" tabindex="2" required>
      </div>

      <div class="form-group text-right">
        <button class="btn btn-primary" tabindex="3" :disabled="sending">Login</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {

  name: 'Login',

  data () {
    return {
      sending: false,
      infoError: false,
      email: 'tareq1988@gmail.com',
      password: '123456'
    };
  },

  methods: {

    login() {
      this.sending = true
      this.infoError = false

      this.$http.post(this.$api('/login'), {
        email: this.email,
        password: this.password
      })
      .then(response => {
        this.$store.dispatch('login', response.data)
        this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.api_token
        this.$router.push(this.$route.query.redirect || '/')
      })
      .catch(response => {
        this.infoError = true
      })
      .finally(() => this.sending = false)
    }
  }
};
</script>

<style lang="less">

</style>
