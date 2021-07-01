import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cache from '@/store/cache';

export default new Vuex.Store({
    state: { //保存状态 mapState
        keepAlive: '' // keep alive的页面
    },
    getters: {}, //state的计算属性 mapGetters
    mutations: {}, //更改state 只能是同步操作 mapMutations
    actions: {}, //提交的是mutation，而不是直接更改state；可以包含异步操作  mapActions

    module: { //将store模块化，便于局部管理
        cache // use -> $store.state.cache.show
    }
});
