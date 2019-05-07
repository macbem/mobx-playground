import React from 'react';
import './App.css';
import { TodosContainer } from './todos/todos.container';
import { rootStoreInstance } from './store';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodosContainer store={rootStoreInstance} />
    </div>
  );
}

export default App;
