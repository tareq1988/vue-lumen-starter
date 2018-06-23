<template>
  <form action="" @submit.prevent="recover()">
    <div v-if="success" class="alert alert-success">We have e-mailed your password reset link!</div>

    <div class="form-group">
      <label for="user-email">Your Email</label>
      <input v-model.trim="email" type="text" class="form-control" id="user-email" placeholder="Your email address" required>
    </div>

    <div class="form-group text-right">
      <button class="btn btn-primary" :disabled="sending">Reset Password</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PasswordLostForm',

  data() {
    return {
      sending: false,
      email: '',
      success: false
    }
  },

  methods: {
    recover() {
      this.sending = true

      this.$http.post(this.$api('/password/request'), {email: this.email})
      .then(response => {
        this.success = true
        this.email = ''
      })
      .finally(() => this.sending = false)
    }
  }
}
</script>

<style lang="less">

</style>
