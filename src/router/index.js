import MAinView from '@/views/MAinView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: MAinView,
    },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/contador.vue'),
    }, 
        {
      path: '/listadetareas',
      name: 'listadetareas',
      component: () => import('../components/listadetareas.vue'),
    }, 
  ],
})

export default router
