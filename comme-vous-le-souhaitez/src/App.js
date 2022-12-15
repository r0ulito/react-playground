import "./App.css";
import TodoFilter from "./components/TodoFilter";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

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
