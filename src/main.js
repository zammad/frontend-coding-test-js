import { createApp } from 'vue'
import './styles/main.scss'
import Toaster from '@meforma/vue-toaster'
import axios from 'axios'
import App from './App.vue'
import initializeRouter from './router'

const app = createApp(App)
app.use(Toaster, {
  position: 'top-right',
  pauseOnHover: false
})

initializeRouter(app)

app.mount('#app')

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  console.error(error)
  app.$toast.error(error)
  return error
})
