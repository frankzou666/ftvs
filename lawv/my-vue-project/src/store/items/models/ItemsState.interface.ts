

//引入接口
import { ItemInterface } from '../../..//models/items/Item.interface'


//定义接口类型
export interface ItemStateInterface {
    loading: boolean
    items: ItemInterface[]

}