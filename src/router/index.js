import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'

import User from '@/components/User'


Vue.use(Router)

export default new Router({
  node:'history',
  routes: [{
      path: '/user',
      component: 'User',
      component: User
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      paht:'/hello',
      name:'HelloWorld',
      components: HelloWorld
    }
  ]
})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
