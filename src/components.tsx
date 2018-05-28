import * as React from 'react'
import {Record, List} from 'immutable'

interface IToDoData {
  id: number;
  isDone: boolean;
  text: string;
};

const ToDoDataRecord = Record({
  id: -1,
  isDone: false,
  text: ''
})

export class ToDoData extends ToDoDataRecord implements IToDoData {  
  id: number;
  isDone: boolean;
  text: string;

  constructor(props: IToDoData) {
    super(props)
  }
}

interface IProps {
  todo: ToDoData
}

interface IPropsList {
  todos: List<ToDoData>
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
            { todos.toJS().map(t: ToDoData => (
              <li key={t.id} className='todo__item'>
                <Todo todo={t} />
              </li>
            ))}
          </ul>
        </div>
      );
}