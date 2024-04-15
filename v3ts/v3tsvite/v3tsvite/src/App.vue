<script lang="ts">
import Header from './components/Header/index.vue'
import Main from './components/Main/index.vue'
import Footer from './components/Footer/index.vue'

import { defineComponent,reactive,toRefs} from 'vue';

//导入自定义接口
import IntCar from './types/IntCar'

export default defineComponent({
  name: 'App',
  components: { Header, Main, Footer },
  setup() {
    const  state  =reactive<{cars: IntCar[]}>({
      cars:[
       {id:1,name:"a",isCompleted:true},
       {id:2,name:"b",isCompleted:false},
       {id:3,name:"c",isCompleted:false},
    ]
  })
  //添加数据的方法
  const addToCars=(car:IntCar)=>{
    state.cars.unshift(car)
  };

  //删数据的方法
  const deleteCars=(id:number)=>{
    state.cars = state.cars.filter(car=>{return car.id!=id})
    
  };

  //清除已完成
  const clearCarsComplete=()=>{
    state.cars = state.cars.filter(car=>{return car.isCompleted!=true})
    
  };

  //选择所有
  const selectAll=(newFlag:boolean)=>{
    state.cars.map(car=>{return car.isCompleted=newFlag})
    
  };


  //toRefs()解构,reactve对像
  return { ...toRefs(state),addToCars,deleteCars ,clearCarsComplete,selectAll}
  }
})

</script>

<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 函数和对像，数据，都可以通过属性方式传递给其他组件 -->
      <Header :addToCars="addToCars"></Header>
      <Main :cars='cars' :deleteCars='deleteCars'></Main>
      <Footer :total='cars.length' :clearCarsComplete='clearCarsComplete' 
      :selectAll='selectAll'
      :finished="cars.reduce((pre,current)=>{ return current.isCompleted?pre=pre+1:pre },0)"
      ></Footer>

    </div>

  </div>

</template>

<style scoped></style>
