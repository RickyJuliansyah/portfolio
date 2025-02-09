import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/index'
import "preline";

globalThis.HSStaticMethods = globalThis.HSStaticMethods || {};

const app = createApp(App)
app.use(router)
app.mount('#app')