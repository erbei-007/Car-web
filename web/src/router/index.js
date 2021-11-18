import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '/user', name: 'User', component: () => import('../views/user/index') },
      //安全设置首页
      { path: '/safe', name: 'Safe', component: () => import('../views/safe/index') },
      //密码修改
      { path: '/password', name: 'Password', component: () => import('../views/safe/password') },
      //绑定手机号
      { path: '/telephone', name: 'Telephone', component: () => import('../views/safe/telephone') },

    ]

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
