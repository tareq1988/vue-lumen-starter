import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios';
import store from './store'
import Gravatar from 'vue-gravatar';
import './registerServiceWorker'

Vue.use(VueAxios, axios)
Vue.component('v-gravatar', Gravatar)

Vue.config.productionTip = false

Vue.prototype.$api = function(endpoint) {
  return process.env.VUE_APP_API_ENDPOINT + endpoint
}

// set auth token if presen
const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

new Vue({
  router,
  store,
  render: h => h(App),

  created() {
    this.$http.interceptors.response.use(undefined, function (err) {
      if (err.response.status === 401) {
        router.push('/login')
      }

      return Promise.reject(err)
    })
  }
}).$mount('#app')
