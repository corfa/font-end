import { createRouter, createWebHistory } from 'vue-router'
import SingUp from '../pages/SingUp.vue'
import SingIn from '../pages/SingIn.vue'
import UserProfile from '../pages/UserProfile.vue'
const routes = [
    { path: '/', component: SingUp },
    { path: '/singIn', component: SingIn },
    { path: '/profile', component: UserProfile ,name: 'profile'}

  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
export default router