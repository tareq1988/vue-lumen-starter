<template>
  <div class="page-login mb-5 mt-4">
    <h1 class="text-center mb-5">Login</h1>

    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },

  beforeCreate () {
    if (this.$store.getters.isAuthenticated) {
      this.$router.push('/')
    }
  },
}
</script>

<style lang="less">
.page-login {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}
</style>
