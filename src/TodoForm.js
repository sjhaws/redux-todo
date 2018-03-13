import React from "react"
import {connect} from "react-redux"
import {incId} from "./actions/nextId"
import {addTodo} from "./actions/todos"

class TodoForm extends React.Component {
  state = {name: ""}

  handleChange = (e) => {
    this.setState({ name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //Dispach ADD_TODO
    const {name} = this.state
    const {dispatch, id} = this.props
    const todo = { name, id, complete: false}
    dispatch(addTodo(todo))
    dispatch(incId())
    //Clear Form
    this.setState({name: ""})
  }

  render(){
    const {name} = this.state
    return(
      <div>
        <h3>Add a Todo</h3>
        <form onSubmit= {this.handleSubmit}>
        <input
        required
        value={name}
        onChange = {this.handleChange}>
        </input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {id: state.nextId}
}

export default connect(mapStateToProps)(TodoForm)