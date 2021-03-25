import { createRouter, createWebHistory } from 'vue-router'
//Layouts
import LayoutAdmin from '../layouts/LayoutAdmin.vue'
import LayoutPublic from '../layouts/LayoutPublic.vue'
// Admin pages
import HomeAdmin from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn.vue';
// Public pages
import HomePublic from '../pages/Public';
import Contact from '../pages/Contact.vue'

// General pages
import Error404 from '../pages/Error404.vue';

const routes = [
  {
    path: '/admin', component: LayoutAdmin,
    children: [
      { path: '/admin', component: HomeAdmin },
      { path: '/admin/login', component: AdminSignIn },
    ]
  },
  {
    path: '/', component: LayoutPublic,
    children: [
      { path: '/', component: HomePublic },
      { path: '/contact', component: Contact },
    ]
  },
  { path: '/:notFount(.*)', component: Error404 }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
