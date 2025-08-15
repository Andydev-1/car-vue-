import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Terms from './Terms.vue'
import Shop from './views/Shop.vue'
import Product from './views/Product.vue'
import Cart from './views/Cart.vue'
import Checkout from './views/Checkout.vue'
import NotFound from './views/NotFound.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/shop', component: Shop, name: 'Shop' },
  { path: '/product/:id', component: Product, name: 'Product' },
  { path: '/cart', component: Cart, name: 'Cart' },
  { path: '/checkout', component: Checkout, name: 'Checkout' },
  { path: '/about', component: About, name: 'About' },
  { path: '/contact', component: Contact, name: 'Contact' },
  { path: '/terms', component: Terms, name: 'Terms' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/signup', component: Signup, name: 'Signup' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

createApp(App).use(router).mount('#app')
