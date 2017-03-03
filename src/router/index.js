import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Help from '@/components/Help'
import Comics from '@/components/Comics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/comics',
      name: 'Comics',
      component: Comics
    }
  ]
})
