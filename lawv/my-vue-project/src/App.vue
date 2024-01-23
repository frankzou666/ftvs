<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'

import { reactive } from 'vue';

//导入一个自定义组件
import ItemListComponent from './components/items/ItemsList.component.vue';


//在组件中引入接口类型，注意前面有type
import type { ItemInterface } from './models/items/Item.interface';


//自定义数据，注意格式
/* const items:any[]=[
  {id:"qqq",name:"item11q"},
  {id:2,name:"item2"},
  {id:9,name:"item9"}
]
 */

 //为什么一定要加上reactive,才会让数据变动
const items:ItemInterface[]=reactive([
  {id:1,name:"item11",selected:false},
  {id:2,name:"item2",selected:false},
  {id:9,name:"item99",selected:true}
]);


const onSelectItem=(id:number)=>{
  const item=items.find(o=>o.id===id);
  if(!item){
    console.log("i can not find item ",id)
    return
  } else{
    console.log(item.selected);
    item.selected = !item.selected;
    console.log(item.id+" modified !",item.selected);
  }

}

</script>

<template>
  <div>
    <!--items数据传给子组件，通过绑定属性的方式，属性名一定要子组件中定义的一样-->
  
    <ItemListComponent :items="items" @selectItem="onSelectItem"></ItemListComponent>
  </div>  
   
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.home {
  padding: 20px; 
}
</style>
