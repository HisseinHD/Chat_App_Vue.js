import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue'),
  },
  {
    path: '/nom-utilisateur',
    name: 'NomUtilisateur',
    component: () => import('../views/NomUtilisateur.vue'), 
  },
  {
    path: '/phone-login',
    name: 'phone-login',
    component: () => import('../views/PhoneLogin.vue'),
  },
  {
    path: '/verification-code',
    name: 'verification-code',
    component: () => import('../views/VerificationCode.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('../views/Messages.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/Contacts.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
