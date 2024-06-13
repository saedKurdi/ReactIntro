import { Component } from "react";
let ID = 0;
class AddTodoForm extends Component {
  state = {
    title: "",
    ID: this.props.todos.length + 1,
  };

  textChanged = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      id: this.state.ID++,
    };
    this.props.addTodo(obj);
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.textChanged}
        />
        <button type="submit" onClick={this.onSubmit}>
          Add todo
        </button>
      </form>
    );
  }
}

export default AddTodoForm;
