import React from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

const filtered = (todos, currentFilter) => {
  switch (currentFilter){
    case "Active":
      return todos.filter(t => !t.complete)
    case "Completed":
      return todos.filter(t => t.complete)
    default:
      return todos
  }
}

const TodoList = ({ todos, filter }) => (
  <ul>
    { filtered(todos, filter).map( t => {
        return (
          <Todo key={t.id} {...t} />
        )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { todos: state.todos, filter: state.filter }
}

export default connect(mapStateToProps)(TodoList);