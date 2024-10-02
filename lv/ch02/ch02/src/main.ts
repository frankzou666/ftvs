//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


//global component,import
import MyComponent from './views/MyComponent.vue'

const app = createApp(App)
//register global component
app.component('MyComponent',MyComponent)

app.use(createPinia())
app.use(router)


app.component('MyComponent',MyComponent)
app.mount('#app')
