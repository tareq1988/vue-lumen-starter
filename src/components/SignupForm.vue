<template>
  <form @submit.prevent="signup" method="post">

    <div class="form-row form-group">
      <div class="col">
        <label for="first-name">First Name</label>
        <input v-model.trim="form.first_name" type="text" :class="['form-control', {'is-invalid': hasError('first_name') }]" id="first-name" placeholder="First name" required>
        <div class="text-danger small" v-if="hasError('first_name')">{{ getError('first_name') }}</div>
      </div>
      <div class="col">
        <label for="last-name">Last Name</label>
        <input v-model.trim="form.last_name" type="text" :class="['form-control', {'is-invalid': hasError('last_name') }]" id="last-name" placeholder="Last name" required>
        <div class="text-danger small" v-if="hasError('last_name')">{{ getError('last_name') }}</div>
      </div>
    </div>

    <div class="form-group">
      <label for="user-email">Email</label>
      <input v-model.trim="form.email" type="text" :class="['form-control', {'is-invalid': hasError('email') }]" id="user-email" placeholder="you@domain.com" required>
      <div class="text-danger small" v-if="hasError('email')">{{ getError('email') }}</div>
    </div>

    <div class="form-row form-group">
      <div class="col">
        <label for="password">Password</label>
        <input v-model.trim="form.password" type="password" :class="['form-control', {'is-invalid': hasError('password') }]" id="password" placeholder="Password" required>
        <div class="text-danger small" v-if="hasError('password')">{{ getError('password') }}</div>
      </div>
      <div class="col">
        <label for="password-confirm">Confirm Password</label>
        <input v-model.trim="form.password_confirmation" type="password" class="form-control" id="password-confirm" placeholder="Re-type password" required>
      </div>
    </div>

    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="toc" required>
        <label class="form-check-label" for="toc">
          I agree the <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>

    <div class="form-group text-right">
      <button class="btn btn-primary">Signup</button>
    </div>

  </form>
</template>

<script>
export default {

  name: 'SignupForm',

  data () {
    return {
      sending: false,
      infoError: false,
      errors: {},
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },

  methods: {
    hasError(field) {
      return this.errors && this.errors.hasOwnProperty(field)
    },

    getError(field) {
      if (this.hasError(field)) {
        return this.errors[field][0]
      }
    },

    signup() {
      this.sending = true
      this.infoError = false
      this.errors = {}

      this.$http.post(window.apiUrl + '/register', this.form)
      .then(response => {
        this.$store.dispatch('login', response.data)
        this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.api_token
        this.$router.push(this.$route.query.redirect || '/')
      })
      .catch(err => {
        console.log(err.response.data)
        this.errors = err.response.data
        this.infoError = true
      })
      .finally(() => this.sending = false)
    }
  }
};
</script>

<style lang="less">
</style>
