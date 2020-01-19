import { computed } from 'mobx';

export default class User {
  constructor(name) {
    this.id = Math.random();
    this.name = name;
  }

  @computed get info() {
    return `id: ${this.id}, name: ${this.name}`;
  }
}
