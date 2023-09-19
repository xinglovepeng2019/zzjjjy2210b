import { createRouter, createWebHistory } from 'vue-router'
// import {useUserStore} from '@/stores'
// const store =useUserStore()


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/list',
      component:()=>import('../views/Home/index.vue'),
      children:[
        {
          path:'/list',
          component:()=>import('../views/List/index.vue'),
        }
      ]
     },
     {
      path:'/login',
      component:()=>import('../views/Login/index.vue')
     }
  ]
})

// 添加路由守卫
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('MY-TOKEN')
  console.log(token)
  if(token||to.path==='/login'){
    next()
  }else{
    next('/login')
  }
 
});

export default router
