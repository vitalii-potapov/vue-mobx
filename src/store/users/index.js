import { action, observable } from 'mobx';
import User from './user';

export default class Users {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable list = [
    new User('Bob'),
    new User('Jon'),
    new User('Leo'),
  ];

  @action addUser(name) {
    this.list.push(new User(name));
  }
}
