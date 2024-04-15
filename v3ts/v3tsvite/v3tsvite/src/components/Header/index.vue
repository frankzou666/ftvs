<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认"  v-model="task" @keyup.enter="add"/>
    </div>
</template>
<script lang='ts'>

import { defineComponent,ref } from 'vue';
import IntCar from '../../types/IntCar'

export default defineComponent({
    name: 'Header',
    //接收函数时
    props: {
        addToCars:{
            type:Function,
            required:true
        }
    },
    setup(props) {
        let task=ref();
        const add=()=>{
            const title = task.value.trim();
            if (!title) { return }
            //
            const car:IntCar={
                id:Date.now(),
                name:title,
                isCompleted:false
            }
            props.addToCars(car)
            task.value=''
        }
        return {task,add}
    }
})
</script>
<style scoped></style>