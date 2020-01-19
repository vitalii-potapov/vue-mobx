import { configure } from 'mobx';
import Users from './users/index';

configure({ enforceActions: 'observed' });

export default class Store {
  constructor() {
    this.users = new Users(this);
  }
}

export const store = new Store();
