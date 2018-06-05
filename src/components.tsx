import * as React from 'react'
import {Record, List} from 'immutable'
import { Dispatch } from 'react-redux'

export interface IToDoData {
  id: string;
  isDone: boolean;
  text: string;
};

const ToDoDataRecord = Record({
  id: -1,
  isDone: false,
  text: ''
})

export class ToDoData extends ToDoDataRecord implements IToDoData {
  id: string;
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
  todos: List<ToDoData>,
  toggleTodo: (id: number) => Dispatch,
  addToDo: (text: string) => Dispatch
}


export const Todo = ({todo}: IProps) => {
  if(todo.isDone) {
    return <span className="todo-done">{todo.text}</span>;
  } else {
    return <span>{todo.text}</span>;
  }
}

export const ToDoList = ({todos, toggleTodo, addToDo}: IPropsList) => {

  const onSubmit = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const text: string = input.value;

    input.value = '';
    addToDo(text);
  };

  //const toggleClick = id => event => toggleTodo(id);

  return (
      <div className='todo'>
        <input type='text' placeholder='Add todo' />
        <ul className='todo__list'>
            { todos.map((t: ToDoData) => {
              return <li key={t.id} className='todo__item'>
                <Todo todo={t} />
              </li>
              })}
        </ul>
      </div>
    );
}