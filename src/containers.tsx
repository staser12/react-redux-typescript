import { connect } from 'react-redux'
import { List } from 'immutable'
import * as components from './components'
import { addTodo, toggleTodo } from './actions'
import { IToDoData } from './components'
import { Dispatch } from 'react-redux' 

export const ToDoList = connect(
    function mapStateToProps(state: List<IToDoData>) {
        return { todos: state };
    },
    function mapDispatchToProps(dispatch: Dispatch) {
      return {
        addTodo: (text: string) => dispatch(addTodo(text)),
        toggleTodo: (id: string) => dispatch(toggleTodo(id))
      }
    }
  )(components.ToDoList);