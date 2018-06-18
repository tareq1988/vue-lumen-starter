import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Signup from './views/Signup.vue'
import PasswordReset from './views/PasswordReset.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: { requiresAuth: true }
    },
    {
      path: '/password-reset',
      name: 'password-reset',
      component: PasswordReset
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isAuthenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
