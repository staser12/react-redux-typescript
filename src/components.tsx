import * as React from 'react'

export class ToDoData {
  id: number;
  isDone: boolean;
  text: string;

  constructor(id: number, isDone: boolean, text: string) {
    this.id = id;
    this.isDone = isDone;
    this.text = text;
  }
}

/*const dummyTodos = [
  new ToDoData(0, true, 'make components'),
  new ToDoData(1, false, 'design actions'),
  new ToDoData(2, false, 'implement reducer'),
  new ToDoData(3, false, 'connect components')
];*/

interface IProps {
  todo: ToDoData
}

interface IPropsList {
  todos: ToDoData[]
}


export const Todo = ({todo}: IProps) => {
  if(todo.isDone) {
    return <span className="todo-done">{todo.text}</span>;
  } else {
    return <span>{todo.text}</span>;
  }
}

export const ToDoList = ({todos}: IPropsList) => {
    return (
        <div className='todo'>
          <input type='text' placeholder='Add todo' />
          <ul className='todo__list'>
            {todos.map(t => (
              <li key={t.id} className='todo__item'>
                <Todo todo={t} />
              </li>
            ))}
          </ul>
        </div>
      );
}