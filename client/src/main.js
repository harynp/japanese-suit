import Vue from 'vue'
import VueRouter from 'vue-router'
import vClickOutside from 'v-click-outside'
// Plugins
import SideBar from './components/SidebarPlugin'
import App from './App'
// import router from './router'
import store from './vuex/store'
import firebase from 'firebase'
import axios from 'axios'
// router setup
import routes from './routes/routes'
// library imports
import Chartist from 'chartist'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/paper-dashboard.scss'
import 'es6-promise/auto'
// plugin setup
Vue.use(VueRouter)
Vue.use(vClickOutside)
Vue.use(SideBar)

Vue.prototype.$http = axios.create()
// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

const config = {
  databaseURL: "https://japanese-suit-e30e0.firebaseio.com",
  projectId: "japanese-suit-e30e0"
}
firebase.initializeApp(config);
Vue.prototype.$db = firebase.database()

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
})
