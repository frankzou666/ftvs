<template>
    <li @mouseover="handleMouseoverandLeave(true)" @mouseleave="handleMouseoverandLeave(false)" 
      :style="{backgroundColor:myBg}"   >
                <label>
                    <input type="checkbox" v-model="car.isCompleted">
                    <span>{{car.name }}</span>
                </label>
                <button class="btn btn-danger" :style="{display:isDisplay}"   @click="deleteCars(car.id) ">删除</button>
    </li>
</template>
<script lang='ts'>

import { defineComponent,reactive,toRefs } from 'vue';
import IntCar from '../../types/IntCar';

export default defineComponent({
    name: 'Item',
    props: {
        car: Object as () => IntCar,
        deleteCars:{
            type:Function,
            required:true
        }
    },

    setup(props) {
        const state=reactive({
            myBg:'',
            isDisplay:'none',
        })
        const deleteCars = (id:number) =>{
            props.deleteCars(id);
        };

        const handleMouseoverandLeave=(Optype:boolean)=>{
            if (Optype) {
                state.myBg='red';
                state.isDisplay='block';

            } else {

                state.myBg='';
                state.isDisplay='none';
            }
            
            

        };
        
        // const handleMouseoverandLeave=(in:boolean)=>{
        //     if (in>10) {
        //         console.log("in")
        //     } else {
        //         console.log("out")
        //     }

        // };
        return {...toRefs(state), deleteCars,handleMouseoverandLeave }
    }
    
})
</script>
<style scoped></style>