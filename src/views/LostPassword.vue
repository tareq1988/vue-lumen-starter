<template>
  <div class="page-lost-pass container mb-5 mt-5">
    <h1 class="mb-5 text-center">Lost Password</h1>

    <div v-if="info" class="alert alert-success">We have e-mailed your password reset link!</div>

    <form action="" @submit.prevent="recover()">
      <div class="form-group">
        <label for="user-email">Your Email</label>
        <input v-model.trim="email" type="text" class="form-control" id="user-email" placeholder="Your email address" required>
      </div>

      <div class="form-group text-right">
        <button class="btn btn-primary">Reset Password</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PasswordReset',

  data() {
    return {
      email: '',
      info: false
    }
  },

  methods: {
    recover() {
      this.$http.post(window.apiUrl + '/password/request', {email: this.email})
      .then(response => {
        this.info = true
        this.email = ''
      })
    }
  }
}
</script>

<style lang="less">
.page-lost-pass {
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}
</style>
