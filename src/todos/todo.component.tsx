import React from "react";
import { TodoModel } from "../store/todos/todos.model";
import { observer } from 'mobx-react';

interface ITodoProps {
  todo: TodoModel;
  toggleFinished: (id: number) => void,
  delete: (id: number) => void,
}

export const Todo: React.FC<ITodoProps> = observer(function Todo(props: ITodoProps) {
  return (
    <div style={{ border: "2px hotpink solid" }}>
      <div>Title: {props.todo.description}</div>

      <div>Finished: {String(props.todo.finished)}</div>

      <div>ID: {props.todo.id}</div>

      <button onClick={() => props.toggleFinished(props.todo.id)}>Toggle finished</button>
      <button onClick={() => props.delete(props.todo.id)}>Delete</button>
    </div>
  );
});
