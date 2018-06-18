<template>
  <div class="page-forgot-pass container mb-5 mt-4">
    <h1 class="mb-5">Reset Password</h1>

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

  beforeCreate () {
    if (this.$store.getters.isAuthenticated) {
      this.$router.push('/')
    }
  },

  data() {
    return {
      email: ''
    }
  },

  methods: {
    recover() {
      alert('Not implemented')
    }
  }
}
</script>

<style lang="less">
.page-forgot-pass {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}
</style>
