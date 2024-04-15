
//vu3使用createApp函数来创建vm实例
import { createApp } from 'vue'

//引入css
import './style.css'
import './assets/index.css'
//引入App组件
import App from './App.vue'

//创建对像，并加载到一个index.html元素
createApp(App).mount('#root')
