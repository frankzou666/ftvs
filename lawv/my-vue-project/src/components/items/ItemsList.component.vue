<template>
    <div>
        <h3>Items:</h3>

        <ul>
            <!-- <li v-for="(item,index) in items" :key="item.id" @click="handelClick(item)">
                {{ item.name }} [{{item.selected }}]
            </li> -->
            <ItemComponent v-for="(item,index) in items" 
                           :model="item"
                           @selectItem="handelClick(item)"
                          :key="item.id">
            </ItemComponent>
        </ul>
    </div>
</template>

<script setup lang="ts">

//在组件中引入接口类型，注意前面有type

import type { ItemInterface } from '../../models/items/Item.interface';

//引入一个组件

import ItemComponent from '../items/children/Item.component.vue';
//注意这里定义组件的props和vue2有很大不同
//defineProps<{items:any[]}>()

//定义props的同时定义了数据类型，且是一个[]类型
defineProps<{ items:ItemInterface[]}>()

//defineEmits是什么玩意?，自定义了一个触发函数，但是这个函数是由父组件传过来的
const emit = defineEmits<{(e:"selectItem",id:number):any}>()

//定义了一个函数，在vue2中说是定义了一个方法
//这里只有数据单向，当改变了item的值，并不会重新宣染页面
const handelClick=function(item:ItemInterface){
   
    emit("selectItem",item.id);
  

}
 

</script>


<style>
ul {
padding-inline-start: 0;
 margin-block-start: 0; 
margin-block-end: 0;
 margin-inline-start: 0px;
  margin-inline-end: 0px;
   padding-inline-start: 0px;
}
</style>