<template>
  <form class="form form-change_pass" @submit.prevent="changePassword">
    <div v-if="passChanged" class="alert alert-success">Password changed successfully!</div>

    <div class="form-group">
      <input v-model="pass.current" :class="['form-control', {'is-invalid': hasError('current') }]" name="current" type="password" autocomplete="false" placeholder="Current password" required>
      <div class="text-danger small" v-if="hasError('current')">{{ getError('current') }}</div>
    </div>

    <div class="form-row form-group">
      <div class="col">
        <input v-model.trim="pass.password" :class="['form-control', {'is-invalid': hasError('password') }]" name="password" type="password" placeholder="New password" autocomplete="false" required>
        <div class="text-danger small" v-if="hasError('password')">{{ getError('password') }}</div>
      </div>
      <div class="col">
        <input v-model.trim="pass.password_confirmation" class="form-control" name="password_confirmation" type="password" placeholder="Confirm new password" autocomplete="false" required>
      </div>
    </div>

    <div class="form-group text-right">
      <button class="btn btn-primary" :disabled="sending">Change Password</button>
    </div>
  </form>
</template>

<script>
import formError from '@/mixins/formError'

export default {

  name: 'PasswordForm',

  mixins: [formError],

  data () {
    return {
      sending: false,
      passChanged: false,
      pass: {
        current: '',
        password: '',
        password_confirmation: ''
      }
    };
  },

  methods: {
    changePassword() {
      this.errors = {}
      this.passChanged = false
      this.sending = true

      this.$http.post(window.apiUrl + '/me/password', this.pass)
      .then(response => {
        this.$store.dispatch('login', response.data)
        this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.api_token

        // reset pass fields
        this.pass = {
          current: '',
          password: '',
          password_confirmation: ''
        }

        this.passChanged = true
      })
      .catch(err => {
        this.errors = err.response.data
      })
      .finally(() => this.sending = false)
    }
  }
};
</script>

<style lang="less" scoped>
</style>
