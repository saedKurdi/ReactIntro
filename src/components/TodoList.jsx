import { Component } from "react";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
class TodoList extends Component {
  state = {
    todos: this.props.todos,
  };

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    return (
      <>
        <h1>'TODOS' : </h1>
        <ul className="todo-list">
          {this.state.todos.map((t) => {
            return (
              <li key={t.id}>
                <Todo removeTodo={this.removeTodo} title={t.title} id={t.id} />
              </li>
            );
          })}
        </ul>
        <AddTodoForm todos={this.state.todos} addTodo={this.addTodo} />
      </>
    );
  }
}

export default TodoList;
