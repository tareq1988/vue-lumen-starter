<template>
  <div class="page-post-pass mb-5 mt-4 w-25 mx-auto">
    <h1 class="mb-5 text-center">Lost Password</h1>

    <password-form></password-form>
  </div>
</template>

<script>
import PasswordForm from '@/components/PasswordLostForm.vue'

export default {
  name: 'PasswordReset',

  components: {
    PasswordForm
  }

}
</script>

<style lang="less">

</style>
