<template>
  <div class="page-signup">
    <h1 class="text-center mb-5">Signup</h1>

    <signup-form></signup-form>

  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'

export default {
  name: 'Signup',
  components: {
    SignupForm,
  },
}
</script>

<style lang="less">
.page-signup {
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
}
</style>
