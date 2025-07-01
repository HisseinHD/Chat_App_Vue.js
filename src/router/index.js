// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Définition des routes
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/phone-login',
    name: 'PhoneLogin',
    component: () => import('../views/PhoneLogin.vue'),
  },
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
