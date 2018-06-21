export default {
  data() {
    return {
      errors: {}
    }
  },

  methods: {
    hasError(field) {
      return this.errors && this.errors.hasOwnProperty(field)
    },

    getError(field) {
      if (this.hasError(field)) {
        return this.errors[field][0]
      }
    },
  }
}
