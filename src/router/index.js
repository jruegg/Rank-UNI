import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Fc from '../components/Fc.vue';
import Uni from '../components/Uni.vue';
import Cc from '../components/Cc.vue';

import Cursos from '../components/Cursos.vue';
import Algoritmos from '../components/Algoritmos.vue';
import Pc2 from '../components/Pc2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/uni',
    component: Uni,
  },
  {
    path: '/fc',
    component: Fc,
  },
  {
    path: '/cc',
    component: Cc,
  },
  {
    path: '/cursos',
    component: Cursos,
  },
  {
    path: '/algoritmos',
    component: Algoritmos,
  },
  {
    path: '/pc2',
    component: Pc2,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
