import Vue from 'vue';
import VueX from 'vuex';

import user from './modules/user';//user模块数据
import permisstion from './modules/permisstion';//路由模块

Vue.use(VueX);

const store = new VueX.Store({
    modules: {
        user,
        permisstion
    }
})
export default store