<template>
<div>
   <p>my name is {{ name }}</p>
   <button @click="updateCount">count</button>

   <p>nameFromData from {{ nameFromData }}</p>
   
   <button @click="updatenameFromData">nameFromData</button>


</div>
</template>

<script  lang="ts">
 import { defineComponent, ref} from 'vue';
 export default defineComponent ({
     name :'Home',
     //setup新的选项函数，返回一个对像，可以在模版中直接使用
     //只在初始化时执行一次
     //props参数，获取到是父级组件向子组件专来过数据
     setup(props,context) {
         console.log(props.age)
         //和props取到的值有什么区别？
         console.log(context.attrs.age)
        let name = ref(1);
        // let name = reactive({
        //     name:1
        // })
        function updateCount() {
            name.value++;
            console.log('good')
            console.log(name)

        };
        return {
            name,updateCount
        }
     },
     //可以同时设置data和setup属性
     data () {
        return {nameFromData: 1}
     },
     methods:{
        updatenameFromData() {
            //可以访问reactive()中定义的属性
            //return this.name++;
            return this.nameFromData++;

        },
     }
 })



</script>
<style scoped>



</style>