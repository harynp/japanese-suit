import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)
Vue.use(Vuex)

const state = {
  // player: []
}
const mutations = {

}
const actions = {

}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
