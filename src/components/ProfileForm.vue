<template>
  <form class="form form-edit_profile" @submit.prevent="updateProfile">
    <p class="alert alert-success" v-if="profileMessage" v-html="profileMessage"></p>

    <div class="form-row form-group">
      <div class="col">
        <label for="first-name" class="small">First Name</label>
        <input v-model.trim="form.first_name" type="text" class="form-control" id="first-name" placeholder="First name" required>
      </div>
      <div class="col">
        <label for="last-name" class="small">Last Name</label>
        <input v-model.trim="form.last_name" type="text" class="form-control" id="last-name" placeholder="Last name" required>
      </div>
    </div>

    <div class="form-group text-right">
      <button class="btn btn-primary">Update Profile</button>
    </div>
  </form>
</template>

<script>
export default {

  name: 'ProfileForm',

  data () {
    return {
      profileMessage: '',
      form: {
        first_name: this.data.first_name,
        last_name: this.data.last_name,
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
      this.profileMessage = ''

      this.$http.post(window.apiUrl + '/me', {
        'first_name': this.form.first_name,
        'last_name': this.form.last_name
      })
      .then(response => {
        delete response.data.api_token

        this.$store.dispatch('updateUser', response.data)
        this.$emit('update', response.data)
        this.profileMessage = 'Profile updated successfully!'
      })
      .catch(err => {
        console.log(err);
      })
    },
  }
};
</script>

<style lang="less">
</style>
