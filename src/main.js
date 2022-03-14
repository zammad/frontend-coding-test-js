import { createApp } from 'vue'
import './styles/main.css'
import Toaster from '@meforma/vue-toaster'
import App from './App.vue'
import initializeRouter from './router'

const app = createApp(App).use(Toaster, {
  position: 'top',
})

initializeRouter(app)

app.mount('#app')
