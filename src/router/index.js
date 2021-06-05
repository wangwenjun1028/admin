import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken } from '@/utils/validata.js'
import store from '@/store'


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

// 注册全局的路由守卫
router.beforeEach((to, from, next) => {
    const token = getToken();
    if (token) {//判断是否有token
        if (to.path == '/login') {
            next('/')
        } else {
            let roles = store.getters['user/roles']
            if (roles && roles.length > 0) {// 判断当前用户是否已拉取完user_info信息
                next();
            } else if (roles.length === 0) {
                store.dispatch('user/getInfo').then(() => {
                    next()
                })
            }
        }
    } else {//未登录
        next('/login')
    }
})

export default router;
