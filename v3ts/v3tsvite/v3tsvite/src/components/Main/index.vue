<template>
    <div>
        <ul class="todo-main">
            <Item v-for="(car,index) in cars" 
                  :key="car.id" 
                  :car="car"
                  :deleteCars='deleteCars'
                  >
            </Item>
            
        </ul>
    </div>
</template>
<script  lang='ts'>
import { defineComponent } from 'vue';
import Item from '../Item/index.vue';
export default defineComponent({
    name: 'Main',
    components:{Item},
    //从父组件接改到一个car
    props :['cars','deleteCars'],
    
    setup(props) {
      const deleteCars=(id:number)=>{
        props.deleteCars(id);

      }

      return { deleteCars }
    }

})
</script>
<style scoped></style>