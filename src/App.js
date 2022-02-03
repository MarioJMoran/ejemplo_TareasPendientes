import "./styles.css";
import React from "react";

const ToDo = (props) => {
  return (
    <li>
      <button onClick={props.onDelete}>Borrar</button>
      <span>{props.todo.text}</span>
    </li>
  );
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("Tarea: ");
    this.setState({
      todos: [...this.state.todos, { text: text }]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addTodo()}>Añadir Tarea</button>
        <ul>
          {this.state.todos.map((todo) => (
            <ToDo todo={todo} onDelete={() => this.deleteTodo(todo.id)} />
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
