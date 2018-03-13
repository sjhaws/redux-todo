import React from 'react';
import { connect } from 'react-redux';
import {toggleTodo} from "./actions/todos"

const styles = {
  complete: { textDecoration: 'line-through', color: 'grey' }
}

const Todo = ({ id, name, complete, dispatch }) => (
  <li
    onClick={() => dispatch(toggleTodo(id))}
    style={ complete ? styles.complete : {} }
  >
    {name}
  </li>
)

export default connect()(Todo)