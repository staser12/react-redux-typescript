import * as React from 'react'
import { Record, List } from 'immutable'
import { addTodo, toggleTodo } from './actions'

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

export interface IProps {
  todo: ToDoData
};

export interface IPropsList {
  todos: List<ToDoData>
};

export const Todo = (todo: IProps) => {
  if(todo.todo.isDone) {
    return <span className="todo-done">{todo.todo.text}</span>;
  } else {
    return <span>{todo.todo.text}</span>;
  }
}

export const ToDoList = (todos: IPropsList) => {

  var todoInputRef: React.RefObject<HTMLInputElement> = React.createRef()

  const onSubmit = (event: React.SyntheticEvent<HTMLInputElement>) => {
    //const input: HTMLInputElement = event.target as HTMLInputElement;
    //const text: string = input.value;   
    
    if (todoInputRef.current != null) {
      var todoInput: HTMLInputElement = todoInputRef.current

      if (todoInput !== null) {
        const text: string = todoInput.value
  
        todoInput.value = '';
        addTodo(text);
      } else {
        console.error("todo input ref is null!")
      }
    }
  };

  const toggleClick = (id: string) => (event: React.MouseEvent<HTMLElement>) => toggleTodo(id);

  return (
      <div className='todo'>

        <input type='text' placeholder='New todo text' ref={todoInputRef}/>
        <input type='button' value='Add todo' onClick={onSubmit}/>
        <ul className='todo__list'>
            { todos.todos.map((t: ToDoData) => {
              return <li key={t.id} className='todo__item' onClick={toggleClick(t.get('id'))}>              
                <Todo todo={t} />
              </li>
              })}
        </ul>
      </div>
    );
}