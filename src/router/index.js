import { createRouter, createWebHistory } from 'vue-router'

//Layouts
import LayoutAdmin from '../layouts/LayoutAdmin.vue'
import LayoutPublic from '../layouts/LayoutPublic.vue'

// Admin pages
import HomeAdmin from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn';

// Public pages
import HomePublic from '../pages/Public';
import Contact from '../pages/Contact.vue'

// General pages
import Error404 from '../pages/Error404.vue';

import { checkUserLogin } from '../services/auth.service';


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/admin', component: LayoutAdmin,
      children: [
        {
          path: '/admin', component: HomeAdmin
          , meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/', component: LayoutPublic,
      children: [
        { path: '/', component: HomePublic },
        { path: '/contact', component: Contact },
      ]
    },
    {
      path: '/login', component: AdminSignIn
      , meta: { requiresUnauth: true }
    },
    { path: '/:notFount(.*)', component: Error404 }
  ]
});

// Middleware para comprobar la existencia de JWT
router.beforeEach((to, from, next) => {
  console.log(checkUserLogin());
  if (to.meta.requiresAuth && !checkUserLogin()) {
    next("/login");
  } else if (to.meta.requiresUnauth && checkUserLogin()) {
    next("/admin");
  } else {
    next();
  }
});

export default router
