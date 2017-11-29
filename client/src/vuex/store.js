import Vue from 'vue'
import Vuex from 'vuex'
import Vuefire from 'vuefire'
import firebase from 'firebase'

Vue.use(Vuefire)
Vue.use(Vuex)

var config = {
  apiKey: "AIzaSyBqCk97SAOGEEw6PuHKT943nFZwWNXDMek",
  authDomain: "japanese-suit.firebaseapp.com",
  databaseURL: "https://japanese-suit.firebaseio.com",
  projectId: "japanese-suit",
  storageBucket: "japanese-suit.appspot.com",
  messagingSenderId: "1089227357697"
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database()

Vue.prototype.$db = db
const state={

}

const actions={

}
const mutations={
  
}
const store = {
  state,
  actions,
  mutations
}

export default store