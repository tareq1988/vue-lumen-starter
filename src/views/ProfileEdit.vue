<template>
  <div class="card mb-4" style="width: 35rem;">
    <div class="card-header">
      Profile Information
    </div>

    <div class="card-body" v-if="user != null">
      <profile-form :data="user"></profile-form>
    </div>
  </div>
</template>

<script>
import ProfileForm from '@/components/ProfileForm.vue'

export default {

  name: 'ProfileEdit',

  components: {
    ProfileForm,
  },

  data () {
    return {
      user: null
    };
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
  }
};
</script>

<style lang="css" scoped>
</style>
