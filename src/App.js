import "./App.css";
import TodoPanel from "./components/TodoPanel";
// import todoList from "./todoList";
import React from "react";
import base from "./base";
import { isEmpty } from "lodash";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.ref = base.syncState(`/`, {
      context: this,
      state: "todos",
    });
  }

  render() {
    let lastCheckedIndex = null;

    const checkItem = (index, event) => {
      // below was for hold shift and change
      // if (event.shiftKey !== undefined) {
      // take a copy
      const todos = [...this.state.todos];

      todos[index] = { ...todos[index], complete: !todos[index].complete };

      this.setState({ todos });

      lastCheckedIndex = index;
      // }
    };
    const loadTodo = () => {
      if (this.state.todos.length != undefined)
        return this.state.todos.map((todo, index) => (
          <TodoPanel
            todo={todo.todo}
            checked={todo.complete}
            key={index}
            index={index}
            checkItem={checkItem}
            deleteItem={deleteItem}
          />
        ));
    };

    const addTodo = (e) => {
      e.preventDefault();
      // create a new element
      const todo = { todo: e.target.elements.todo.value, complete: false };

      // take a copy of the state
      if (isEmpty(this.state.todos)) {
        var todos = [];
      } else {
        var todos = [...this.state.todos];
      }
      todos.push(todo);
      this.setState({ todos });
      e.target.reset();
    };

    const deleteItem = (index) => {
      // take a copy
      const todos = [...this.state.todos];
      delete todos[index];
      this.setState({ todos });
    };

    return (
      <div className="App">
        <h1> To-do list </h1>
        <div className="inbox">
          {loadTodo()}

          <div className="add-todo">
            <form onSubmit={(e) => addTodo(e)}>
              <input
                type="text"
                placeholder="Add todo item"
                name="todo"
                style={{ height: "40px", width: "80%", border: "none" }}
              />
              <button style={{ height: "40px", width: "18%" }}>📓 Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
