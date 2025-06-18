import { Component, Fragment } from "react";
import Count from "./Count";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
      activeTodo: { isEditActive: false, todoVal: undefined, todoUpdate: "" },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.toggleIsEditActive = this.toggleIsEditActive.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(todoToDelete) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo != todoToDelete),
    }));
  }

  toggleIsEditActive(todo) {
    this.setState((state) => ({
      ...state,
      activeTodo: { ...state.activeTodo, isEditActive: true, todoVal: todo },
    }));
  }

  handleEditChange(e) {
    this.setState((state) => ({
      ...state,
      activeTodo: {
        ...state.activeTodo,
        todoUpdate: e.target.value,
      },
    }));
  }

  handleResubmit(e, originalTodo) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.map((todo) =>
        todo == originalTodo ? state.activeTodo.todoUpdate : todo
      ),
      activeTodo: { isEditActive: false, todoVal: undefined, todoUpdate: "" },
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <Count todos={this.state.todos} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            id="task-entry"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <Fragment key={todo}>
              {this.state.activeTodo.todoVal == todo ? (
                <form onSubmit={(e) => this.handleResubmit(e, todo)}>
                  <label htmlFor="editable-task">Update the task: </label>
                  <input
                    type="text"
                    id="editable-task"
                    name="editable-task"
                    value={this.state.activeTodo.todoUpdate}
                    onChange={this.handleEditChange}
                    placeholder={todo}
                    autoFocus
                  />
                </form>
              ) : (
                <li>{todo}</li>
              )}
              <button onClick={() => this.handleDelete(todo)}>Delete</button>
              {this.state.activeTodo.isEditActive &&
              this.state.activeTodo.todoVal == todo ? (
                <button
                  type="submit"
                  onClick={(e) => [
                    this.toggleIsEditActive(todo),
                    this.handleResubmit(e, todo),
                  ]}
                >
                  Resubmit
                </button>
              ) : (
                <button onClick={() => this.toggleIsEditActive(todo)}>
                  Edit
                </button>
              )}
            </Fragment>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
