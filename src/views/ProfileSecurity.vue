<template>
  <div class="card mb-4" style="width: 35rem;">
    <div class="card-header">
      Change Password
    </div>

    <div class="card-body">
      <password-form></password-form>
    </div>
  </div>
</template>

<script>
import PasswordForm from '@/components/PasswordForm.vue'

export default {

  name: 'ProfileSecurity',

  components: {
    PasswordForm,
  },

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>
