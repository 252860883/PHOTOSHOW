import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import main from '../components/main.vue';
import like from '../components/like.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: main
    },
    {
      path:'/like',
      name:'like',
      component:like
    }
    
  ]
})
