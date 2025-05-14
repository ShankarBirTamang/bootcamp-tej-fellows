/* eslint-disable no-unused-vars */
class MyEventEmitter {
  constructor() {
    this.events = {};
  }

  addListener(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, ...args) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      eventCallbacks.forEach((callback) => {
        callback(...args);
      });
    }
  }
}
