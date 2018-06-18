<template>
  <div id="app">
    <header class="header d-flex flex-column flex-md-row border-bottom mb-4 p-2">

      <router-link to="/" class="navbar-brand mr-md-2"><img src="./assets/logo.png" title="The Logo" width="24" height="auto" /> Company</router-link>

      <ul class="nav flex-row ml-md-auto">
        <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
        <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
        <li class="nav-item" v-if="!isAuthenticated"><router-link to="/login" class="nav-link">Login</router-link></li>
        <li class="nav-item" v-if="!isAuthenticated"><router-link to="/signup" class="nav-link">Signup</router-link></li>
        <li class="nav-item align-middle" v-if="isAuthenticated">
          <router-link to="/profile" class="nav-link">
            <v-gravatar :email="userEmail" :size="48" width="24" class="rounded-circle border mr-2" />
            <span class="">Profile</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link to="/logout" class="nav-link">Logout</router-link>
        </li>
      </ul>
    </header>
    <section class="view-container">
      <router-view/>
    </section>

    <footer class="footer border-top pt-2 mt-4 pb-3 text-center">
      <small class="text-muted">Copyright &copy; 2018, The Company.</small>
    </footer>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'App',
  data() {
    return {
      showDropdown: false
    }
  },

  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated
    },

    userEmail() {
      return this.$store.getters.user.email
    },

    userName() {
      return this.$store.getters.user.first_name + ' ' + this.$store.getters.user.last_name
    }
  },
}
</script>

<style lang="less">

</style>
