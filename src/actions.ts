import { IToDoData } from './components';
import { v4 as uuid } from 'uuid';

const uid = uuid()

export interface IToDoAction {
  type: string,
  payload: IToDoData
}

export function addTodo(text: string) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid,
      isDone: false,
      text: text
    } as IToDoData
  } as IToDoAction
}

export function toggleTodo(id: string) {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id: id
    } as IToDoData
  } as IToDoAction
}