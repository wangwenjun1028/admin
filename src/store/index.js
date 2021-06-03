import Vue from 'vue';
import VueX from 'vuex';

import user from './modules/user';//user模块数据

Vue.use(VueX);

const store = new VueX.Store({
    modules: {
        user
    }
})
export default store