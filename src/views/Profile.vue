<template>
  <div class="page-profile container">

    <div class="user-profile" v-if="user !== null">

      <div class="row">
        <div class="col-md-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item active">Profile</li>
            <li class="list-group-item disabled">Billing</li>
          </ul>
        </div>
        <div class="col">
          <h2 class="pb-2">Hello, {{ fullName }}!</h2>

          <div class="card mb-4" style="width: 35rem;">
            <div class="card-header">
              Profile Information
            </div>

            <div class="card-body">
              <profile-form :data="user" @update="profileUpdated"></profile-form>
            </div>
          </div>

          <div class="card mb-4" style="width: 35rem;">
            <div class="card-header">
              Change Password
            </div>

            <div class="card-body">
              <password-form></password-form>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ProfileForm from '@/components/ProfileForm.vue'
import PasswordForm from '@/components/PasswordForm.vue'

export default {

  name: 'Profile',

  components: {
    ProfileForm,
    PasswordForm
  },

  data () {
    return {
      user: null,
    };
  },

  computed: {

    fullName() {
      return this.user.first_name + ' ' + this.user.last_name;
    }
  },

  created() {
    this.fetchProfile()
  },

  methods: {

    fetchProfile() {
      this.$http.get(window.apiUrl + '/me')
      .then(response => {
        delete response.data.api_token
        this.user = response.data
      })
      .catch(err => {
        console.log(err);
      })
    },

    profileUpdated(data) {
      this.user = data
    }
  }
};
</script>

<style lang="less">

</style>
