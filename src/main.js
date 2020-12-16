import Vue       from 'vue'
import Vant      from 'vant'
import 'vant/lib/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App    from './App.vue'
import store  from './store'
import router from './router'
import filter from './filter'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(ElementUI)

// new Promise((resolve, reject) => {
//     // eslint-disable-next-line no-constant-condition
//     if(process.env.VUE_APP_PROXY === '1'){
//         console.log(process.env.VUE_APP_USEPROXY)
//         resolve()
//     }else{
//         reject()
//     }
// }).then(() => {
    new Vue({
        store : store,
        router: router,
        filter: filter,
        render: h => h(App),
    }).$mount('#app')
// })
