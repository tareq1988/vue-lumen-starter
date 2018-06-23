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
import Loading from '@/mixins/loading'

export default {

  name: 'ProfileEdit',

  components: {
    ProfileForm,
  },

  mixins: [Loading],

  data () {
    return {
      user: null,
      loading: false,
    };
  },

  created() {
    this.fetchProfile()
  },

  methods: {

    fetchProfile() {
      this.loading = true

      this.$http.get(this.$api('/me'))
      .then(response => {
        delete response.data.api_token
        this.user = response.data
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.loading = false)
    },
  }
};
</script>

<style lang="css" scoped>
</style>
