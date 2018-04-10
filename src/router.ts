import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import HelloWorld from './components/HelloWorld.vue'
import ConferenceRoom from './views/ConferenceRoom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/conference-room',
      name: 'conference-room',
      component: ConferenceRoom
    }
  ]
})
