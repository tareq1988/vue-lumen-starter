<template>
  <div class="page-profile container">

    <div class="user-profile">

      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-header">Settings</div>
            <div class="list-group list-group-flush">
              <router-link to="/profile" class="list-group-item list-group-item-action" exact>Profile</router-link>
              <router-link to="/profile/security" class="list-group-item list-group-item-action">Security</router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  name: 'Profile',

  data () {
    return {
      user: null,
    };
  },

};
</script>

<style lang="less">

</style>
