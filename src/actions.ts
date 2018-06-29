import { ToDoData } from './components';
import { v4 as uuid } from 'uuid';

const uid = uuid()

export interface IToDoAction {
  type: string,
  payload: ToDoData
}

export function addTodo(text: string) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid,
      isDone: false,
      text: text
    } as ToDoData
  } as IToDoAction
}

export function toggleTodo(id: string) {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id: id
    } as ToDoData
  } as IToDoAction
}