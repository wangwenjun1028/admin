import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/views/login/index.vue';
import Layout from '@/views/Layout/index.vue';
import NotFount from '@/views/404.vue'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout
    }, {
        path: '/layout',
        name: 'layout',
        component: Layout
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '*',
        name: '404',
        component: NotFount
    }
]
const router = new VueRouter({
    routes,
    mode: 'history',
})
export default router;
