import '../public/js/rem.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// plugins
import getVant from "@/plugins";



const app = createApp(App)

getVant(app)

app.use(router)

app.mount('#app')

