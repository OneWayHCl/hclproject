import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstFile from '@/components/FirstFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstFile',
      component: FirstFile
    },

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
