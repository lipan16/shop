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
// POST https://www.cibxzh.cn/openapi/component/loginS.jsp?parameter={%22userName%22:%22014776%22,%22passWord%22:%227C0BE3A2A9469AE0FD9F8607A49856BEB87E5AD8E5A5C3E0373948774A457648B3F91C190F39A29150CB8FCE78EFC6F5550C99FE02B93B48B057ED928157EA15B04E02ECAE727B763144438B398F0123DCF67F9883A3BC43659A2AA907A1E3AF82F53880E0DA2FCBD81B61A97DFDE96A654EEB8B1D75F0F552A7EB6D99F7F50%22,%22deviceId%22:%22867106020022759%22,%22deviceType%22:%22HUAWEI%20M2-803L%22,%22sysType%22:%22android5.1.1%22,%22appId%22:%22com.cib.CIBSafeBrowser%22,%22sakId%22:%2220150529%22}
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
