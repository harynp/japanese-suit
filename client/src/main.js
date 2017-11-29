// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import vClickOutside from 'v-click-outside'

// Plugins
import GlobalComponents from './gloablComponents'
// import Notifications from './components/UIComponents/NotificationPlugin'
// import SideBar from './components/UIComponents/SidebarPlugin'

// router setup
// import routes from './routes/routes'

// library imports
// import Chartist from 'chartist'
// import 'bootstrap/dist/css/bootstrap.css'
// import '~assets/sass/paper-dashboard.scss'
// import 'es6-promise/auto'


Vue.config.productionTip = false

// plugin setup
Vue.use(VueRouter)
// Vue.use(GlobalComponents)
// Vue.use(vClickOutside)
// Vue.use(Notifications)
// Vue.use(SideBar)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
