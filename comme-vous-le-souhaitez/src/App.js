import { TodoFilter, TodoInput, TodoList } from "./components";
import "./App.css";
import { useEffect, useState } from "react";

const todoModel = {
  id: 1,
  title: "",
  isCompleted: false,
  isEditing: false,
};

function App() {
  const [newTodo, setNewTodo] = useState(todoModel);
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  useEffect(() => {
    switch (currentFilter) {
      case "all":
        setFilteredTodos(todos);
        break;
      case "complete":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "uncomplete":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        break;
    }
  }, [currentFilter, todos]);

  const setTodoTitle = (title) => {
    setNewTodo((prevState) => ({
      ...prevState,
      title,
    }));
  };

  const toggleTodoProperty = (todoId, prop) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            [prop]: !todo[prop],
          };
        }

        return todo;
      })
    );
  };

  const handleChange = (title) => {
    setTodoTitle(title);
  };

  const handleKeyDown = (key) => {
    switch (key) {
      case "Enter":
        if (newTodo.title !== "") {
          setTodos((prevState) => [...prevState, newTodo]);
          Object.assign(todoModel, { id: ++todoModel.id });
          setNewTodo(todoModel);
        }
        break;

      case "Escape":
        // il faut faire un autre truc
        setTodoTitle("");
        break;

      default:
        break;
    }
  };

  const deleteTodo = (todoId) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId));
  };

  const editTitle = (title, todoId) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            title,
          };
        }

        return todo;
      })
    );
  };

  const keyDownEvent = (key, id, oldTitle) => {
    switch (key) {
      case "Enter":
        toggleTodoProperty(id, "isEditing");        
        break;

      case "Escape":
        editTitle(oldTitle, id);
        toggleTodoProperty(id, "isEditing");
        break;

      default:
        break;
    }

  };
  return (
    <div className="App">
      <TodoInput
        title={newTodo.title}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <TodoFilter setCurrentFilter={setCurrentFilter} />
      <TodoList
        items={filteredTodos}
        handleCheckbox={toggleTodoProperty}
        deleteTodo={deleteTodo}
        changeEditingState={toggleTodoProperty}
        editTitle={editTitle}
        keyDownEvent={keyDownEvent}
      />
    </div>
  );
}

export default App;
