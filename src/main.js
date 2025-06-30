import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css';
import router from './router';


createApp(App).mount('#app')

app.use(router);