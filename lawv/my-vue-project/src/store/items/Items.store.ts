

import { reactive  } from "vue";

import { ItemStateInterface } from './models/'
import { ItemInterface } from '../..//models/items/Item.interface'


//以reactive的方式来实例化这个接口
const itemsState = reactive<ItemStateInterface>({
    loading: false,
    items: []
})

const actions = {
    loadItems :async() => {
        itemsState.loading=true;
        itemsState.items=[];
        let mockData:ItemInterface[]=[
            {id:1,name:'item1',selected:false},
            {id:2,name:'item2',selected:false},
            {id:3,name:'item3',selected:true},
            {id:4,name:'item4',selected:true},
            {id:5,name:'item5',selected:false},
        ];

        setTimeout(()=>{
            itemsState.items = mockData;
            itemsState.loading = false;
            
        },1000)
    },

    toggleItemSelected: async (id: number) => {
        const item = (itemsState.items || []).find((o) => o.id === id) 
        if (item) {
              item.selected = !item.selected
            }
    }
}

//定义了两个getters
const getters = {
    get loading() {return itemsState.loading},
    get items() {return itemsState.items }
}


export interface ItemsStoreInterface { 
    getters: typeof getters
    actions: typeof actions
}

    
export function useItemsStore(): ItemsStoreInterface { 
    return {
    getters,
    actions 
   }
}
    