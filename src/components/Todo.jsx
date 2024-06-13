import { Component } from "react";

class Todo extends Component {
  state = {
    id: this.props.id,
    title: this.props.title,
  };

  handleDeleteTodo = () => {
    this.props.removeTodo(this.state.id);
  };
  render() {
    return (
      <div className="todo">
        <h2>Todo</h2>
        <p>ID - {this.state.id}</p>
        <p>{this.state.title}</p>
        <button onClick={this.handleDeleteTodo}>delete todo</button>
      </div>
    );
  }
}

export default Todo;
