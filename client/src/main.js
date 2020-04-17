import Vue from 'vue'
import VuerRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Chat from './components/Chat.vue'

Vue.config.productionTip = false

Vue.use(VuerRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/chat/:username([a-zA-Z0-9]{3,15})/:room([a-fA-F0-9]{12})', component: Chat},
  {path: '*', redirect: '/'}
]

const router = new VuerRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
