import Vue    from 'vue'
import Router from 'vue-router'
import Home   from '../pages/home'

Vue.use(Router)
const router = new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [{
        path: '/',
        component: Home
    }
    ]
})
router.beforeEach((to, from, next) => {
    console.log(to, from)
    next()
})
export default router