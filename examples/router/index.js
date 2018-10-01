import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import zInput from '../components/input'
import Radio from '../components/radio'
import Checkbox from '../components/checkbox'
import Rate from '../components/rate'
import Search from '../components/search'
import List from '../components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/zInput',
      name: 'zInput',
      component: zInput
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox
    },
    {
      path: '/rate',
      name: 'Rate',
      component: Rate
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
