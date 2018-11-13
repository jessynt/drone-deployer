import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth.service';
import cache from "../common/services/cache"
import {keys} from "../common/services/cache";
import {createAction} from "./helpers";
import {SET_AUTH} from "./mutations.type";
import bus from "../common/services/event.service";

Vue.use(Vuex);

export const init = ({commit}) => {
  return new Promise((resolve => {
    cache.get(keys.DRONE_ACCESS_TOKEN).then(value => {
      commit(createAction(SET_AUTH, {token: value}))
      resolve()
    }).catch(() => {
      resolve()
    }).then(() => bus.emit("ready"))
  }))
}

export default new Vuex.Store({
  actions: {
    init
  },
  modules: {
    auth
  }
})
