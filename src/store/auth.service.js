import {SET_AUTH, LOGOUT} from "./mutations.type"
import {createAction} from "./helpers";
import cache, {keys} from "../common/services/cache"
import httpFetch from "../common/services/fetch.service";

const state = {
  authorized: false,
  token: null,
}

function login({commit}, token) {
  return httpFetch("/post", {method: "POST"}).then(response => {
    commit(createAction(SET_AUTH, {token: token}))
    return Promise.resolve(response);
  })
}

function logout({commit}) {
  commit(createAction(LOGOUT))
}

const getters = {
  checkLogin: state => state.authorized,
};

const actions = {
  login,
  logout,
}

const mutations = {
  [SET_AUTH](state = {}, mutation) {
    state.authorized = true
    state.token = mutation.payload.token
    cache.set(keys.DRONE_ACCESS_TOKEN, state.token)
  },
  [LOGOUT](state = {}) {
    state.authorized = false
    cache.clear() // clear all cache
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
