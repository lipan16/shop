import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'

Vue.use(Router)
const router = new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../pages/sy.vue')
        },
        {
            path: '/home',
            component: Home
        }
    ]
})
// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title || 'vue-manage-system'
//     const role = localStorage.getItem('loginInfo')
//     if(!role && to.path !== '/login'){
//         next('/login')
//     }else if(to.meta.permission){
//         role === 'admin' ? next() : next('/403')
//     }else{
//         if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === 'editor'){
//             Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器请使用更高版本的浏览器查看', '浏览器不兼容通知',
//                 {confirmButtonText: '确定'}
//             ).then(() => {
//             })
//         }else{
//             next()
//         }
//     }
// })

export default router
