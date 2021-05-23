import "./App.css";
import TodoPanel from "./components/TodoPanel";
import todoList from "./todoList";

function App() {
  const Todo = todoList.map((todo) => (
    <TodoPanel todo={todo.todo} complete={todo.complete} />
  ));

  return <div className="App">{Todo}</div>;
}

export default App;
