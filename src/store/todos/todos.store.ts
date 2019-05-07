import { observable, action } from 'mobx';
import { Store, TRootStore } from '../store.interface';
import { RootStore } from '../root-store.store';
import { EntityDict } from '../../utils';
import { TodoModel, ITodoModelPayload } from './todos.model';

export class TodoStore implements Store {
  public rootStore: RootStore;

  @observable public todos: EntityDict<TodoModel> = {};

  constructor (rootStore: TRootStore) {
    this.rootStore = rootStore;

    this.insertMockTodos();
  }

  @action
  public addTodo(payload: ITodoModelPayload): TodoModel {
    const newTodo = new TodoModel(payload);

    this.todos[newTodo.id] = newTodo;

    return this.todos[newTodo.id];
  }

  @action
  public removeTodo(id: number): void {
    delete this.todos[id];
  }

  @action
  public editTodo(id: number, payload: Partial<ITodoModelPayload>): TodoModel {
    this.todos[id] = Object.assign(this.todos[id], payload);

    return this.todos[id];
  }

  public getTodos(): TodoModel[] {
    return Object.values(this.todos);
  }

  public getTodosEntity(): TodoStore['todos'] {
    return this.todos;
  }

  private insertMockTodos(): void {
    this.addTodo({
      description: 'Try out MobX',
      finished: false,
    });

    this.addTodo({
      description: 'Rest well',
      finished: false,
    });
  }
}
