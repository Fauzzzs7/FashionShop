import { createRouter, createWebHistory } from 'vue-router'
import HomePages from '../pages/HomePages.vue'
import DetailContentHome from '../pages/DetailContentHome.vue'
import CategoryPages from '../pages/HomePages.vue'
import HomeFavorite from '../pages/HomeFavorite.vue'
import AddFav from '../pages/AddFav.vue'
import Dashboard from '../components/Dashboard.vue'
import Index from '../components/Index.vue'
import AddComponent from '../components/AddComponent.vue'
import login from '../pages/LoginHome.vue'
import signup from '../pages/LoginHome.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePages
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    
    {
      path: '/category/',
      name: 'category',
      component: CategoryPages,
       props: true
    },

    {
      
        path: '/detail/:id',
        name: 'detail',
        props: true,
    },
    {

      path: '/favorite',
      name: 'Favorite',
      component: HomeFavorite
    },

    {

      path: '/addfav',
      name: 'AddFav',
      component: AddFav
    },

    {

      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/add',
      name: 'index',
      component: Index
    },
    {
      path: '/dashboard/addComponent/:id',
      name: 'AddComponent',
      component: AddComponent
    },
  ]
})

export default router