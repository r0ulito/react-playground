import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoFilter />
      <TodoList />
    </div>
  );
}

export default App;
