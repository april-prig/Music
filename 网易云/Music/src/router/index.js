import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Mine from "@/views/Mine.vue";
import ItemMusic from "@/views/ItemMusic.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  },
  {
    path:'/ItemMusic',
    name: 'ItemMusic',
    component: ItemMusic
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
