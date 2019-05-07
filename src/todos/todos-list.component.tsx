import React from 'react';
import { TodoModel } from '../store/todos/todos.model';
import { Todo } from './todo.component';
import { observer } from 'mobx-react';

interface ITodosListProps {
  todos: TodoModel[];
  toggleFinished: (id: number) => void;
  delete: (id: number) => void;
}

export const TodosList: React.FC<ITodosListProps> = observer(function TodosList(props: ITodosListProps) {
  console.log(props.todos);

  return (<>
    {props.todos.map(todo => <Todo todo={todo} key={todo.id} toggleFinished={props.toggleFinished} delete={props.delete} />)}
  </>);
});
