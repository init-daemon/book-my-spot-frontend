// Composables
import { createRouter, createWebHistory } from 'vue-router'
import BookingVue from '@/views/Booking.vue'

const routes = [
  {
    path: '/',
    // component: () => import('@/layouts/default/Default.vue'),
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/booking/:id',
    name: 'Booking',
    component: BookingVue,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
