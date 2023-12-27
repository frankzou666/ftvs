<template>
  <div>

    <!-- <Student :studentName='studentName'></Student> -->
    
    <!-- <router-link v-bind:to="{name:'Hello',params:{name:'good'}}">to helloWorld </router-link> -->
    <!--通过，this.$router.push({name:'Student'});转到新的路由中去了，router-view被组件替换了，但是h2元素不变-->
    <!--this.$router.push({name:'Hello',params:{name:'joy'}}); 传路由参数到子组件中，子组件通过 $route.params.name 得到-->
    <h2>to student view</h2>
    <router-view></router-view>
    <button v-on:click="updatePath">测试route push</button>

  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hello from './components/Hello.vue';
import Student from './components/Student.vue';


export default {
  name: 'App',
  data: function(){
    return {
      studentName:'111',
    }

  },
  components: {
    HelloWorld,
    Hello,
    Student
  },
  methods: {
    updatePath(){
      //和<route-link>一样，只是这个通过this.$router.push来实现
      this.$router.push({name:'Hello',params:{name:'joy'}});
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
