export default class LocalStorage {
  set(key, value) {
    if (typeof value === 'string' || typeof value === 'number') {
      window.localStorage.setItem(key, value);
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
    return Promise.resolve();
  }

  del(key) {
    window.localStorage.removeItem(key);
    return Promise.resolve();
  }

  get(key) {
    let value = window.localStorage.getItem(key);
    if (value && value !== 'undefined') {
      try {
        value = JSON.parse(value);
        return Promise.resolve(value);
      } catch (err) {
        return Promise.resolve(value);
      }
    } else {
      return Promise.reject();
    }
  }

  clear() {
    window.localStorage.clear();
    return Promise.resolve();
  }
}
