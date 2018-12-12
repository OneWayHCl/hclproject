import Router from 'vue-router'
import App from '@/App'
import Vue from 'vue'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('@/components/FirstFile')), 'login')
const hello = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'hello')

const routes = [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    // 登录页面
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    // hello
    {
      path: '/hello',
      component: hello
    }]
}]

export default new Router({
  routes
})

// import HelloWorld from '@/components/HelloWorld'
// import FirstFile from '@/components/FirstFile'

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'FirstFile',
//       component: FirstFile
//     },
//
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
