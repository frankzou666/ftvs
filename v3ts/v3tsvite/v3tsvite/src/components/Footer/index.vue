 <template>
  <div class="todo-footer">
        <label>
          <input type="checkbox" v-model = 'selected' @change="handleCheck"/>
        </label>
        <span>
          <span>已完成{{ finished }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearCarsComplete">清除已完成任务</button>
      </div>

 </template>
 <script  lang='ts'>
    import { defineComponent,reactive,toRefs} from 'vue';
    export   default defineComponent({
        name:'Footer',
        props:['total','finished','clearCarsComplete','selectAll'],
        setup(props){
            const state = reactive({
                selected:false,

            })
            
            const handleCheck=()=>{
               props.selectAll(state.selected)
            }
            const clearCarsComplete=()=>{
                state.selected=false
                props.clearCarsComplete()
            }
        return { ...toRefs(state),handleCheck,clearCarsComplete }    
        }
    })
 </script>
  <style scoped>
 </style>
