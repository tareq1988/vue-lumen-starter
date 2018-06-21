<template>
  <form action="" @submit.prevent="reset()">
    <div v-if="changed" class="alert alert-success">Your password has been changed.</div>
    <div v-if="changeError" class="alert alert-danger">Your password could not be changed. Please try again.</div>

    <div class="form-group">
      <label for="user-email">Email</label>
      <input v-model.trim="form.email" type="email" :class="['form-control', {'is-invalid': hasError('email') }]" id="user-email" placeholder="Your email" required>
      <div class="text-danger small" v-if="hasError('email')">{{ getError('email') }}</div>
    </div>

    <div class="form-group">
      <label for="user-pass">New Password</label>
      <input v-model.trim="form.password" type="password" :class="['form-control', {'is-invalid': hasError('password') }]" id="user-pass" placeholder="Your new password" required>
      <div class="text-danger small" v-if="hasError('password')">{{ getError('password') }}</div>
    </div>

    <div class="form-group">
      <label for="user-pass2">Re-enter New Password</label>
      <input v-model.trim="form.password_confirmation" type="password" class="form-control" id="user-pass2" placeholder="Confirm new password" required>
    </div>

    <div class="form-group text-right">
      <button class="btn btn-primary" :disabled="sending">Change Password</button>
    </div>
  </form>
</template>

<script>
import formError from '@/mixins/formError'

export default {

  name: 'ResetPassword',

  mixins: [formError],

  data () {
    return {
      sending: false,
      changed: false,
      changeError: false,
      form: {
        email: '',
        password: '',
        password_confirmation: '',
        token: this.$route.params.key
      }
    };
  },

  methods: {
    reset() {
      this.sending = true
      this.changed = false
      this.changeError = false

      this.$http.post(window.apiUrl + '/password/reset', this.form)
      .then(response => {

        if (response.data.success) {
          this.changed = true

          this.form.email = ''
          this.form.password = ''
          this.form.password_confirmation = ''

        } else {
          this.changeError = true
        }

      })
      .catch(err => {
        this.errors = err.response.data
      })
      .finally(() => this.sending = false)
    }
  }
};
</script>

<style lang="less">

</style>
