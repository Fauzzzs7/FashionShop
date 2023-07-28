import { createRouter, createWebHistory } from 'vue-router'
import HomePages from '../pages/HomePages.vue'
import DetailContentHome from '../pages/DetailContentHome.vue'
import CategoryPages from '../pages/HomePages.vue'
import HomeFavorite from '../pages/HomeFavorite.vue'
import AddFav from '../pages/AddFav.vue'
import Dashboard from '../Dashboard/Dashboard.vue'
import Index from '../Dashboard/Index.vue'
import ViewComponent from '../Dashboard/ViewComponent.vue'
import AddComponent from '../Dashboard/AddComponent.vue'
import login from '../components/login.vue'
import signup from '../components/signup.vue'
import Trending from '../Dashboard/Trending.vue'
import Style from '../Dashboard/Style.vue'
import Component from '../Dashboard/Component.vue'


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
        component: DetailContentHome,
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

      path: '/trending',
      name: 'trending',
      component: Trending
    },
    {

      path: '/style',
      name: 'style',
      component: Style
    },
    {

      path: '/component',
      name: 'component',
      component: Component
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
    {
      path: '/ViewComponent/:id',
      name: 'ViewComponent',
      component: ViewComponent
    },
  ]
})

export default router