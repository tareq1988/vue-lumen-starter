<template>
  <div id="app">
    <header class="header d-flex flex-column flex-md-row border-bottom mb-4 p-2">

      <router-link to="/" class="navbar-brand mr-md-2"><img src="./assets/logo.png" title="The Logo" width="24" height="auto" /> Company</router-link>

      <ul class="nav flex-row ml-md-auto">
        <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
        <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
        <li class="nav-item" v-if="!isAuthenticated"><router-link to="/login" class="nav-link">Login</router-link></li>
        <li class="nav-item" v-if="!isAuthenticated"><router-link to="/signup" class="nav-link">Signup</router-link></li>
        <li class="nav-item" v-if="isAuthenticated">
          <dropdown dropdown-classes="dropdown-menu-right">
            <template slot="button">
              <a href="#" class="nav-link dropdown-toggle py-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <v-gravatar :email="userEmail" :size="128" width="40" class="rounded-circle border mw-100 p-1" />
              </a>
            </template>
            <template slot="dropdown">
              <router-link to="/profile" class="dropdown-item">Profile</router-link>
              <router-link to="/logout" class="dropdown-item">Logout</router-link>
            </template>
          </dropdown>
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
import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'App',

  components: {
    Dropdown
  },

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

  }
}
</script>

<style lang="less">

</style>
