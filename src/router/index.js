import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Room from '@/views/Room/Index.vue'
import Chat from '@/views/Chat/Index.vue'
import User from '@/views/User/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/room',
    name: 'Rooms',
    component: Room
  },
  {
    path: '/room/chat/:id',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
