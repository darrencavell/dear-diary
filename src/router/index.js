import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Cookie from 'vue-cookie'

import Login from '@/components/Login'
import Register from '@/components/Register'
import Blog from '@/components/Blog'
import SingleBlog from '@/components/SingleBlog'
import AddBlog from '@/components/AddBlog'
import Header from '@/components/includes/Header'

Vue.use(Router)
Vue.use(Resource)
Vue.use(Cookie)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'singeBlog',
      component: SingleBlog
    },
    {
      path: '/header',
      name: 'headerYea',
      component: Header
    },
    {
      path: '/add',
      name: 'addBlog',
      component: AddBlog
    }
  ],
  mode: 'history'
})
