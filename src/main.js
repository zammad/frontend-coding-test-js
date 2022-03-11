import { createApp } from 'vue'
import './styles/main.css'
import axios from 'axios'
import Toaster from '@meforma/vue-toaster'
import App from './App.vue'
import initializeRouter from './router'

const app = createApp(App).use(Toaster)
initializeRouter(app)
app.mount('#app')

axios.interceptors.response.use((response) => {
  app.$toast.show('Data fetched successfully', {
    position: 'bottom-right',
    type: 'success',
  })
  return response
})
