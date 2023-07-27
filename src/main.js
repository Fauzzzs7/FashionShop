import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import axios from 'axios';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";

import HomePage from './pages/HomePages.vue';
import DashboardVue from './Dashboard/Dashboard.vue'

const routes = [
  {
    path: 'http://localhost:5173/dashboard',
    name: 'dashboard',
    component: DashboardVue,
  },
  // Add more routes as needed
];

axios.defaults.withCredentials = true;


export default routes;


createApp(App)
.use(router)
.mount('#app')


