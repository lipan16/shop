// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Video from 'video.js'
import 'video.js/dist/video-js.min.css'

Vue.config.productionTip = false
require('./mockjs/mock')
Vue.prototype.$video = Video

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
