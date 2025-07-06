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
      component: () => import('../modules/contador/components/contador.vue'),
    }, 
        {
      path: '/listadetareas',
      name: 'listadetareas',
      component: () => import('../modules/listaDeTareas/components/listadetareas.vue'),
    }, 
    {
      path: '/registrar',
      name: 'Registrar',
      component: () => import('../modules/registro/views/ResgistroView.vue'),
    },
  ],
})

export default router
