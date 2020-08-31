import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Fc from '../components/Fc.vue';
import Uni from '../components/Uni.vue';
import Cc from '../components/Cc.vue';

import Cursos from '../components/Cursos.vue';
import Algoritmos from '../components/Algoritmos.vue';
import Pc1 from '../components/Pc1.vue';
import Pc2 from '../components/Pc2.vue';
import Pc3 from '../components/Pc3.vue';

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
    path: '/pc01',
    component: Pc1,
  },
  {
    path: '/pc02',
    component: Pc2,
  },
  {
    path: '/pc03',
    component: Pc3,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
