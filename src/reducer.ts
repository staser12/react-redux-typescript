import { List } from 'immutable'
import { IToDoAction } from './actions'
import { ToDoData, IToDoData } from './components'

const init = List<IToDoData>([])

export default function(todos=init, action: IToDoAction) {
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(action.payload)
    case 'TOGGLE_TODO':
      return todos.map ( (t: ToDoData) => {
        if (t.get('id') === action.payload.id) {
          return t.update('isDone', isDone => !isDone)
        } else {
          return t
        }
      })
    default:
      return todos
  }
}