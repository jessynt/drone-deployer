import {SET_AUTH} from "./mutations.type"
import {createAction} from "./helpers";
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

const getters = {
  checkLogin: state => state.authorized,
  authHeader: state => state.authorized ? {'Authorization': 'Bearer ' + state.token} : {},
};

const actions = {
  login,
}

const mutations = {
  [SET_AUTH](state = {}, mutation) {
    state.authorized = true
    mutation && (state.token = mutation.payload.token)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
