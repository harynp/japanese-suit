import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)
Vue.use(Vuex)

var config = {
  databaseURL: "https://japanese-suit-e30e0.firebaseio.com",
  projectId: "japanese-suit-e30e0",
};

const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()

const state = {
  arrPlay: []
}
const mutations = {

}
const actions = {
  getPlayer ({commit}, payload) {
    db.ref('japanese-suit/room').push({
      room: payload.room,
      username: payload.name
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
