import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import store from './store';
import router from './router';
import filter from './filter';
import Api from './api/API';
import baseMixin from './mixin/baseMixin.js';

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(ElementUI);
Vue.mixin(baseMixin);

new Promise((resolve, reject) => {
    if(process.env.VUE_APP_PROXY === 'YES'){ // webapp
        Api.login().then(res => {
            console.log(res);
            resolve();
        }, err => {
            // this.$b_dialogAlert(err)
            console.log(err);
            reject();
        });
    }
    // mobile
    resolve();
}).then(() => {
    new Vue({
        store: store,
        router: router,
        filter: filter,
        render: h => h(App)
    }).$mount('#app');
});
