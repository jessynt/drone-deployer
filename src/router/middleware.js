import store from '../store';
import router from '../router'

export function auth(to, from, next) {
  if (store.getters['checkLogin']) {
    next()
  } else {
    next(false)
    router.replace({name: 'login'})
  }
}

export function guest(to, from, next) {
  if (!store.getters['checkLogin']) {
    next()
  } else {
    next(false)
    router.replace({name: 'home'})
  }
}
