import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this); // Makes state observable and actions auto-bind
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  get doubleCount() {
    return this.count * 2; // Computed value
  }
}

const counterStore = new CounterStore();
export default counterStore;
