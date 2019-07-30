import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './../components/Login'
import Tipes from './..//components/Tipes'
import Admin from './..//components/Admin'
import Guest from './..//components/Guest'
import Home from './..//components/Home'



Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect:'/login',
      component: Login,
      meta: ['admin', 'user']
    },
    {
      path: '/login',
      name:'login',
      component: Login,
      meta: ['admin', 'user']
    },

    {
      path: '/tipes',
      name: 'tipes',
      component: Tipes,
      meta:['admin','user']
    },



    {
      path:'/home',
      name:'home',
      component: Home,
      redirect: '/home/guest',
      meta: ['admin', 'user'],
      children: [
        {
          path:'admin',
          name:'Admin',
          component: Admin,
          meta: ['admin']
        },
        {
          path:'guest',
          name:'Guest',
          component: Guest,
          meta: ['admin', 'user']
        }
      ]
    }



  ]
})

router.beforeEach((to,from,next)=>{
  if (to.path === '/login') {
    next()
  }else {
     //获取token
    let role = sessionStorage.getItem('roles') || router.app.$options.store.state.roles

     //如果没有token
     if (role === ''){
      next('/login');
     }else {
      if (to.matched.every(item=>item.meta.indexOf(role) > -1)){
        next();
      }else {
        next('/tipes')
      }
     }
  }

})

export default router


