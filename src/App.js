import "./App.css";
import TodoPanel from "./components/TodoPanel";
import todoList from "./todoList";
import React from "react";
import base from "./base";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: todoList,
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
      if (event.shiftKey !== undefined) {
        console.log(event.shiftKey);
        // take a copy
        const todo = [...this.state.todos];

        todo[index] = { ...todo[index], complete: !todo[index].complete };

        this.setState({ todos: todo });

        lastCheckedIndex = index;
      }
    };
    const Todo = this.state.todos.map((todo, index) => (
      <TodoPanel
        todo={todo.todo}
        checked={todo.complete}
        key={index}
        index={index}
        checkItem={checkItem}
      />
    ));

    return (
      <div className="App">
        <div className="inbox">{Todo}</div>
      </div>
    );
  }
}

export default App;
