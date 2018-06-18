<template>
  <div></div>
</template>
<script>
export default {
  name: 'Logout',

  beforeCreate () {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch('logout');
      this.$router.push('/login')
    } else {
      this.$router.push('/home')
    }
  },

};
</script>
