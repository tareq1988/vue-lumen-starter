<template>
  <div class="dropdown" @click.prevent="toggleDropdown">
    <slot name="button">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </button>
    </slot>
    <div :class="['dropdown-menu', dropdownClasses, {'show': showDropdown}]">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Dropdown',

  props: {
    dropdownClasses: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      showDropdown: false
    };
  },

  mounted() {
    window.addEventListener('click', this.closeDropdown)

    console.log(this.$slots);
  },

  destroyed() {
    window.removeEventListener('click', this.closeDropdown)
  },

  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },

    closeDropdown(e) {
      let classes = e.target.parentNode.classList

      if (typeof classes === 'undefined') {
        return
      }

      if (!classes.contains('dropdown') && !classes.contains('dropdown-toggle')) {
        this.showDropdown = false
      }
    }
  }
};
</script>

<style lang="css">

</style>
