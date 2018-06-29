import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ToDoList } from './containers'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux';

const store = createStore(reducer)

/*const dummyTodos = List([
  new ToDoData({id: "0", isDone: true, text:'make components'}),
  new ToDoData({id: "1", isDone: false, text:'design actions'}),
  new ToDoData({id: "2", isDone: false, text:'implement reducer'}),
  new ToDoData({id: "3", isDone: false, text:'connect components'}),
  new ToDoData({id: "4", isDone: false, text:'make things work again'}),
  new ToDoData({id: "5", isDone: false, text:'enjoy life'})
]);*/

ReactDOM.render(
  <Provider store={store}>
    <ToDoList />
  </Provider>,
  document.getElementById('app') as HTMLElement
);
