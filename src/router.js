import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Signup from './views/Signup.vue'
import LostPassword from './views/LostPassword.vue'
import ResetPassword from './views/ResetPassword.vue'
import PageNotFound from './views/PageNotFound.vue'

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
      component: Login,
      meta: { guestOnly: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { guestOnly: true }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: { requiresAuth: true }
    },
    {
      path: '/lost-password',
      name: 'lost-password',
      component: LostPassword,
      meta: { guestOnly: true }
    },
    {
      path: '/password-reset/:key',
      name: 'reset-password',
      component: ResetPassword,
      meta: { guestOnly: true }
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

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

  if (to.matched.some(record => record.meta.guestOnly)) {
    if (store.getters.isAuthenticated) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }

})

export default router
