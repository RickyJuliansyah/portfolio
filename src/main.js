import { createApp } from 'vue'
import './style.css'
// import './script.js'
import App from './App.vue'
import router from './routes/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
