import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToDoList } from './components';
import { ToDoData } from './components';

/*const dummyTodos = [
  { id: 0, isDone: true,  text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' }
];*/


const dummyTodos = [
  new ToDoData(0, true, 'make components'),
  new ToDoData(1, false, 'design actions'),
  new ToDoData(2, false, 'implement reducer'),
  new ToDoData(3, false, 'connect components'),
  new ToDoData(3, false, 'make things work again')
];

ReactDOM.render(
  < ToDoList todos={dummyTodos} />,
  document.getElementById('app') as HTMLElement
);
