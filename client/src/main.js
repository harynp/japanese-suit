// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import firebase from 'firebase'
import axios from 'axios'

Vue.prototype.$http = axios.create()

Vue.config.productionTip = false

var config = {
  databaseURL: "https://japanese-suit-e30e0.firebaseio.com",
  projectId: "japanese-suit-e30e0"
}

firebase.initializeApp(config);

Vue.prototype.$db = firebase.database()

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
