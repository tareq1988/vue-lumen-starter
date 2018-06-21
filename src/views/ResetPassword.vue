<template>
  <div class="page-reset-pass mb-5 mt-4 w-25 mx-auto">
    <h1 class="mb-5 text-center">Reset Password</h1>

    <reset-form></reset-form>
  </div>
</template>

<script>
import ResetForm from '@/components/PasswordResetForm.vue'

export default {

  name: 'ResetPassword',

  components: {
    ResetForm
  }

};
</script>

<style lang="less">

</style>
