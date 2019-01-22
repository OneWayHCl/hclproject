import Router from 'vue-router'
import App from '@/App'
import Vue from 'vue'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('@/components/login')), 'login')
const hello = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'hello')
const home = r => require.ensure([], () => r(require('@/components/home')), 'home')
const buttonview = r => require.ensure([], () => r(require('@/components/buttonview')), 'buttonview')
const ceshiview = r => require.ensure([], () => r(require('@/components/ceshiview')), 'ceshiview')
const errorPage = r => require.ensure([], () => r(require('@/components/errorPage')), 'errorPage')
const errorCode = r => require.ensure([], () => r(require('@/components/errorCode')), 'errorCode')

const userHome = r => require.ensure([], () => r(require('@/page/userHome')), 'userHome')
const studySave = r => require.ensure([], () => r(require('@/components/StudySave')), 'studySave')

const routes = [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    // 登录页面
    {
      path: '',
      redirect: '/login'
    },
    // 登录页面
    {
      path: '/login',
      component: login
    },
    // 主页面
    {
      path: '/home',
      component: home
    },
    // 测试面
    {
      path: '/buttonview',
      component: buttonview
    },
    // 测试面
    {
      path: '/ceshiview',
      component: ceshiview
    },
    // 测试面
    {
      path: '/errorPage',
      component: errorPage
    },
    // 测试面
    {
      path: '/errorCode',
      component: errorCode
    },

    // 用户端主页
    {
      path: '/userHome',
      component: userHome
    },

    // 学习主页
    {
      path: '/StudySave',
      component: studySave
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
