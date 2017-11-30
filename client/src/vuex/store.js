import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)
Vue.use(Vuex)


const state = {
  player: []
}
const mutations = {

}
const actions = {
//
// var config = {
//   apiKey: 'AIzaSyBqCk97SAOGEEw6PuHKT943nFZwWNXDMek',
//   authDomain: 'japanese-suit.firebaseapp.com',
//   databaseURL: 'https://japanese-suit.firebaseio.com',
//   projectId: 'japanese-suit',
//   storageBucket: 'japanese-suit.appspot.com',
//   messagingSenderId: '1089227357697'
// }
//
// const firebaseApp = firebase.initializeApp(config)
// const db = firebaseApp.database()
//
// Vue.prototype.$db = db
// const state = {
//
// }
//
// const actions = {
//
// }
// const mutations = {
//
//
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
