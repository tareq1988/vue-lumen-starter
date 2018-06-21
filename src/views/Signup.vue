<template>
  <div class="page-signup mb-5 mt-4 mx-auto" style="width: 30rem">
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

</style>
