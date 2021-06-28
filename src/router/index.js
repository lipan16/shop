import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home';

Vue.use(VueRouter);
const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            name: '画像',
            path: '/',
            component: () => import('../pages/hx.vue')
        },
        {
            name: '同业首页',
            path: '/sy',
            // 所有组件都打包在同个异步块 group_by
            component: () => import(/* webpackChunkName: "group_by" */ '../pages/sy.vue')
        },
        {
            name: '首页',
            path: '/home',
            component: Home
        }
    ],
    // only available in html5 history mode, 返回时期望滚动到哪个的位置
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) {
            // savedPosition is only available for popstate navigations.
            return savedPosition
        } else {
            const position = {}

            // scroll to anchor by returning the selector
            if (to.hash) {
                position.selector = to.hash
                position.behavior = 'smooth'
                // specify offset of the element
                if (to.hash === '#anchor2') {
                    position.offset = { y: 100 }
                }

                // bypass #1number check
                if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
                    return position
                }

                // if the returned position is falsy or an empty object,
                // will retain current scroll position.
                return false
            }

            return new Promise(resolve => {
                // check if any matched route config has meta that requires scrolling to top
                if (to.matched.some(m => m.meta.scrollToTop)) {
                    // coords will be used if no selector is provided,
                    // or if the selector didn't match any element.
                    position.x = 0
                    position.y = 0
                }

                // wait for the out transition to complete (if necessary)
                this.app.$root.$once('triggerScroll', () => {
                    // if the resolved position is falsy or an empty object,
                    // will retain current scroll position.
                    resolve(position)
                })
            })
        }
    }
});
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

export default router;
