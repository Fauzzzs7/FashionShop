import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import 'tailwindcss/tailwind.css'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";


createApp(App)
.use(router)
.mount('#app')


