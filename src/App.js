import { Component } from "react";
// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
// import ColorPicker from "./components/ColorPicker";
// import colorPickerOptions from "./colorOptions.json";
import TodoList from "./components/TodoList";
import todosList from "./todos.json";
class App extends Component {
  state = {
    todos: todosList,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCounts = todos.length;
    const completedTodosCounts = todos.reduce(
      (acc, todo) => (todo.complited ? acc + 1 : acc),
      0
    );
    return (
      <div className="Container">
        <h1>Component state</h1>
        <div>
          <span>Total quantity Todos: {totalTodoCounts}</span>
          <span>Total complited Todos:{completedTodosCounts}</span>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Dropdown /> */}
        {/* <Counter /> */}
      </div>
    );
  }
}

export default App;
