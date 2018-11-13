import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import bus from "./common/services/event.service";

store.dispatch("init").catch(err => {
  console.log(err)
})

bus.on("ready", () => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
