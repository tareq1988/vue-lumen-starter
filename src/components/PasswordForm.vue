<template>
  <form class="form form-change_pass" @submit.prevent="changePassword">
    <p v-if="passError" class="alert alert-danger" v-html="passError"></p>

    <div v-if="passChanged" class="alert alert-success">Password changed successfully!</div>

    <div class="form-group">
      <input v-model="pass.current" class="form-control" name="current" type="password" autocomplete="false" placeholder="Current password" required>
    </div>

    <div class="form-row form-group">
      <div class="col">
        <input v-model.trim="pass.password" class="form-control" name="password" type="password" placeholder="New password" autocomplete="false" required>
      </div>
      <div class="col">
        <input v-model.trim="pass.password_confirmation" class="form-control" name="password_confirmation" type="password" placeholder="Confirm new password" autocomplete="false" required>
      </div>
    </div>

    <div class="form-group text-right">
      <button class="btn btn-primary">Change Password</button>
    </div>
  </form>
</template>

<script>
export default {

  name: 'PasswordForm',

  data () {
    return {
      passError: false,
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
      this.passError = false
      this.passChanged = false

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
        let response = err.response;
        if (response.status === 422) {
          let message = '';

          Object.keys(response.data).forEach(item => {
            let field = response.data[item];
            for(let i = 0; i < field.length; i++){
              message += field[i] + "<br />";
            }
          });

          this.passError = message;
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
</style>
