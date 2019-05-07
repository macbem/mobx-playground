import { TodoStore } from './todos';

export class RootStore {
  public todoStore: TodoStore;

  constructor() {
    this.todoStore = new TodoStore(this);
  }

}

export const rootStoreInstance = new RootStore();

console.log(rootStoreInstance);
