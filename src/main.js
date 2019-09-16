import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyBhhUdNuLXbPQ7vI5b3967iuBD93i0Vdqc",
  authDomain: "to-do-list-f15cc.firebaseapp.com",
  databaseURL: "https://to-do-list-f15cc.firebaseio.com",
  projectId: "to-do-list-f15cc",
  storageBucket: "",
  messagingSenderId: "356660474949",
  appId: "1:356660474949:web:1d55ed996a1bedab0c1f2c"

}

firebase.initializeApp(config)

export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
