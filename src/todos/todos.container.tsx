import React, { Component, FormEvent, ChangeEvent } from "react";
import { observer, inject } from "mobx-react";

import { RootStore } from "../store";
import { observable, action } from "mobx";
import { TodosList } from "./todos-list.component";

interface ITodosContainerProps {
  rootStore?: RootStore;
}

@inject('rootStore')
@observer
export class TodosContainer extends Component<ITodosContainerProps> {
  @observable newTodoTitle: string = "";

  // necessary in order to preserve proper typing when using @inject
  private get store(): RootStore {
    return this.props.rootStore as RootStore;
  }

  public handleFormSubmit(event: FormEvent): void {
    this.store.todoStore.addTodo({
      description: this.newTodoTitle,
      finished: false,
    });

    this.resetTodoTitle();
    event.preventDefault();
  }

  @action
  private resetTodoTitle() {
    this.newTodoTitle = "";
  }

  @action
  public handleInput(event: ChangeEvent): void {
    if (!event || event === null) return;

    this.newTodoTitle = (event.target as HTMLInputElement).value;
  }

  @action
  public toggleFinished(id: number): void {
    this.store.todoStore.editTodo(id, {
      finished: !this.store.todoStore.getTodosEntity()[id].finished,
    });
  }

  @action
  public delete(id: number): void {
    this.store.todoStore.removeTodo(id);
  }

  public render() {
    const todos = this.store.todoStore.getTodos();

    return (
      <div>
        <form onSubmit={event => this.handleFormSubmit(event)}>
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={event => this.handleInput(event)}
          />

          <button type="submit">Create todo</button>
        </form>

        <TodosList
          todos={Object.values(todos)}
          toggleFinished={(id: number) => this.toggleFinished(id)}
          delete={(id: number) => this.delete(id)}
        />
      </div>
    );
  }
}
