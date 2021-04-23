import Vue from 'vue';
import VueRouter from 'vue-router';
import TabularView from '../views/TabularView.vue';
import CardBlock from '../views/CardBlock.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TabularView',
    component: TabularView,
  },
  {
    path: '/cardBlock',
    name: 'CardBlock',
    component: CardBlock,
  },
];

const router = new VueRouter({
  linkExactActiveClass: 'toggle__btn_active',
  routes,
});

export default router;
