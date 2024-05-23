import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      props: { title: 'Home' },
    },
    {
      path: '/rick',
      name: 'rick',
      component: MainView,
      props: { title: 'Rick' },
    },
    {
      path: '/morty',
      name: 'morty',
      component: MainView,
      props: { title: 'Morty' },
    },
  ],
});

export default router;
