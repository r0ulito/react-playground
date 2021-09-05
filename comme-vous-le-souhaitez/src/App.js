import { useEffect, useState } from "react";
import "./App.css";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const todoModel = {
  id: 1,
  title: "",
  isCompleted: false,
  isEditing: false,
};
const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(todoModel);
  const [currentFilter, setcurrentFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todoCounter, setTodoCounter] = useState(1);

  useEffect(() => {
    if (currentFilter === "completed")
      setFilteredTodos(todos.filter((todo) => todo.isCompleted));
    if (currentFilter === "uncompleted")
      setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
  }, [todos, currentFilter]);

  const handleInputChange = (value) => {
    setNewTodo(Object.assign({}, todoModel, { title: value }));
  };

  const changeTodoState = (todoId, isTodoCompleted) => {
    setTodos((state) =>
      state.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: isTodoCompleted };
        }
        return todo;
      })
    );
  };
  const changeTodoTitle = (todoId, value) => {
    setTodos((state) =>
      state.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, title: value };
        }
        return todo;
      })
    );
  };

  const changeTodoEditingState = (todoId) => {
    setTodos((state) =>
      state.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isEditing: true };
        }
        return todo;
      })
    );
  };

  const handleKeyDownInEditInput = (key, todoId) => {
    if (key === "Enter" || key === "Escape") {
      setTodos((state) =>
        state.map((todo) => {
          if (todo.id === todoId) {
            return { ...todo, isEditing: false };
          }
          return todo;
        })
      );
    }
  };

  const deleteTodo = (todoId) => {
    setTodos((state) => state.filter((todo) => todoId !== todo.id));
  };

  const handleInputKeyEvent = (key) => {
    if (key === "Enter") {
      if (newTodo.title !== "") {
        setTodoCounter((oldCounter) => {
          Object.assign(todoModel, { id: todoCounter + 1 });
          return oldCounter + 1;
        });
        setTodos((state) => [...state, newTodo]);

        setNewTodo(
          Object.assign({}, todoModel, { id: todoCounter, title: "" })
        );
      }
    }
    if (key === "Escape") {
      setNewTodo({
        ...todoModel,
        title: "",
      });
      setNewTodo(Object.assign({}, todoModel, { title: "" }));
    }
  };

  const handleFilterChange = (filter) => {
    switch (filter) {
      case "all":
        setcurrentFilter("all");
        break;
      case "completed":
        setcurrentFilter(filter);
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "uncompleted":
        setcurrentFilter(filter);
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo React</h1>
        <TodoInput
          OnInputChange={handleInputChange}
          onKeyEvent={handleInputKeyEvent}
          text={newTodo.title}
        >
          Entrez une todo
        </TodoInput>
        <TodoFilter OnFilterChange={handleFilterChange} />
        <TodoList
          OnKeyDownInEditInput={handleKeyDownInEditInput}
          onEditingStateChange={changeTodoEditingState}
          onChangeTodoTitle={changeTodoTitle}
          onTodoCompletionChange={changeTodoState}
          onDeleteTodo={deleteTodo}
          items={currentFilter === "all" ? todos : filteredTodos}
        />
      </header>
    </div>
  );
};

export default App;
