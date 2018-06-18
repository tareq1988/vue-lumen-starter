<template>
  <form class="form form-change_pass" @submit.prevent="changePassword">
    <p v-if="passMessage" v-html="passMessage"></p>

    <div class="form-group">
      <input v-model="pass.current" class="form-control" name="current" type="password" autocomplete="false" placeholder="Current Password" required>
    </div>

    <div class="form-row form-group">
      <div class="col">
        <input v-model.trim="pass.password" class="form-control" name="password" type="password" placeholder="New Password" autocomplete="false" required>
      </div>
      <div class="col">
        <input v-model.trim="pass.password_confirmation" class="form-control" name="password_confirmation" type="password" placeholder="Confirm Password" autocomplete="false" required>
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
      passMessage: '',
      pass: {
        current: '',
        password: '',
        password_confirmation: ''
      }
    };
  },

  methods: {
    changePassword() {
      this.passMessage = ''

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

        this.passMessage = 'Password changed successfully!'
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

          this.passMessage = message;
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
</style>
