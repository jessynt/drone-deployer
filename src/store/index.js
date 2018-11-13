import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth.service';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
})
