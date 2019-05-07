import React from 'react';
import './App.css';
import { TodosContainer } from './todos/todos.container';
import { rootStoreInstance } from './store';
import { Provider } from 'mobx-react';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider rootStore={rootStoreInstance}>
        <TodosContainer />
      </Provider>
    </div>
  );
}

export default App;
