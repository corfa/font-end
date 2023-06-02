import { createRouter, createWebHistory } from 'vue-router'
import SingUp from '../pages/SingUp.vue'
import SingIn from '../pages/SingIn.vue'
import UserProfile from '../pages/UserProfile.vue'
import ChatComponent from '../pages/ChatComponent.vue';
const routes = [
    { path: '/', component: SingUp },
    { path: '/singIn', component: SingIn },
    { path: '/profile', component: UserProfile ,name: 'profile'},
    { path: '/chat/:chatId', component: ChatComponent, name: 'chat', props: true }

  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
export default router