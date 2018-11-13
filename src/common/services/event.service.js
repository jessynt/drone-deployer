import Vue from 'vue';

class EventBus {
  constructor() {
    this.emitter = new Vue();
  }

  emit(name, params) {
    this.emitter.$emit(name, params);
  }

  on(name, callback) {
    this.emitter.$on(name, callback);
  }

  off(name, callback) {
    this.emitter.$off(name, callback);
  }
}

let bus = new EventBus();

export default bus;
