import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//引入自定义的两个组件
import Hello from '@/components/Hello.vue';
import Student from '@/components/Student.vue';


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello/:name',
      name: 'Hello',
      component: Hello,
      props:true,
    },
    {
      path:'/student',
      name:'Student',
      component:Student

    }

  ]
})
