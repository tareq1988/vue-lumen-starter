<template>
  <form class="form form-edit_profile" @submit.prevent="updateProfile">
    <p class="alert alert-success" v-if="profileMessage" v-html="profileMessage"></p>

    <div class="form-row form-group">
      <div class="col">
        <label for="first-name" class="small">First Name</label>
        <input v-model.trim="form.first_name" type="text" class="form-control" id="first-name" placeholder="First name" autocomplete="fname" required>
      </div>
      <div class="col">
        <label for="last-name" class="small">Last Name</label>
        <input v-model.trim="form.last_name" type="text" class="form-control" id="last-name" placeholder="Last name" autocomplete="fname" required>
      </div>
    </div>
    <div class="form-group">
      <label for="user-email" class="small">Email</label>
      <input v-model.trim="form.email" type="email" class="form-control" id="user-email" placeholder="Your email address" autocomplete="email" required>
    </div>
    <div class="form-group">
      <label for="user-phone" class="small">Phone</label>
      <input v-model.trim="form.phone" type="text" class="form-control" id="user-phone" placeholder="Your phone number" autocomplete="phone">
    </div>

    <div class="form-group text-right">
      <button class="btn btn-primary" :disabled="sending">Update Profile</button>
    </div>
  </form>
</template>

<script>
export default {

  name: 'ProfileForm',

  data () {
    return {
      sending: false,
      profileMessage: '',
      form: {
        first_name: this.data.first_name,
        last_name: this.data.last_name,
        email: this.data.email,
        phone: this.data.phone,
      },
    };
  },

  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },

  methods: {
    updateProfile() {
      this.sending = true
      this.profileMessage = ''

      this.$http.post(this.$api('/me'), this.form)
      .then(response => {
        delete response.data.api_token

        this.$store.dispatch('updateUser', response.data)
        this.$emit('update', response.data)
        this.profileMessage = 'Profile updated successfully!'
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.sending = false)
    },
  }
};
</script>

<style lang="css">
.list-group-item.active {
  border-color: rgba(0,0,0,.125) !important;
  border-left: 3px solid #007bff !important;
  background: #fff !important;
  color: #495057 !important;
}
</style>
