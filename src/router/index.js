import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import routerLogin from '../modules/auth/routers'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../modules/auth/views/loginView.vue'),
  },
  {
    path: '/auth',
    ...routerLogin
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: () => import(/* webpackChunkName: "ticket" */ '../modules/auth/views/ticketView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router



//! Importante aplicar
// const canAccess = () => { // Protecciones para que no puedan pasar - Login probable uso
//     return new Promise( (resolve, reject) => {
//         const random = Math.random() * 100

//         if( random > 50){
//             console.log(`Autenticado - canAccess`);
//             resolve(true)
//         }else{
//             console.log(random, 'Bloqueado por el beforeEach Guard - canAccess');
//             reject()
//         }
//     })
// }