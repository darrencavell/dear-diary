// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
var config = {
  apiKey: "AIzaSyBiqgwWqCNE9tb0HTV1YMilAHx-wwb9tvc",
  authDomain: "vuejs-playlist-e4a22.firebaseapp.com",
  databaseURL: "https://vuejs-playlist-e4a22.firebaseio.com",
  storageBucket: "vuejs-playlist-e4a22.appspot.com",
};
firebase.initializeApp(config)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


