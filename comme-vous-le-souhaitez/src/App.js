import { useEffect, useState } from "react";
import "./App.css";
import { TodoInput, TodoFilter, TodoList, TodoItem } from "./components";

const todoModel = {
  id: 1,
  title: "",
  isCompleted: false,
  isEditing: false,
};

function App() {
  const [newTodo, setNewTodo] = useState(todoModel);
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  useEffect(() => {
    switch (currentFilter) {
      case "all":
        setFilteredTodos(todos);
        break;

      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;

      default:
        break;
    }
  }, [currentFilter, todos]);

  const handleTitleChange = (title) => {
    setNewTodo((prevState) => ({
      ...prevState,
      title,
    }));
  };

  const handleKeyDownEvent = (key) => {
    if (newTodo.title === "") return;
    if (key === "Enter") {
      setTodos((prevState) => [...prevState, newTodo]);
      Object.assign(todoModel, { id: todoModel.id + 1 });
      setNewTodo(todoModel);
      // on vide le title
    }
    if (key === "Escape") {
      setNewTodo(todoModel);
    }
  };

  const changeTodoState = (todoId) => {
    // !todo.isCompleted
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((prevState) => prevState.filter((todo) => todoId !== todo.id));
  };

  const changeFilter = (value) => {
    setCurrentFilter(value);
  };

  const changeTodoIsEditingProperty = (todoId) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isEditing: true };
        }
        return todo;
      })
    );
  };

  const editTodoTitle = (title, todoId) => {
    setTodos(prevState => prevState.map((todo) => {
      if(todo.id === todoId) {
        return { ...todo, title}
      }
      return todo
    }))

  };

  const handleKeyDownEventInEditInput = (key, todoId, oldTitle) => {
    switch (key) {
      case "Enter":
        setTodos((prevState) =>
          prevState.map((todo) => {
            if (todo.id === todoId) {
              return { ...todo, isEditing: false };
            }
            return todo;
          })
        );
        break;

      case "Escape":
        setTodos((prevState) =>
        prevState.map((todo) => {
          if (todo.id === todoId) {
            return { ...todo, isEditing: false, title: oldTitle };
          }
          return todo;
        })
      );
        break;

      default:
        break;
    }
  };

  const deleteAllCompleted = () => {
    setTodos((prevState) => prevState.filter((todo) => !todo.isCompleted));
  }

  return (
    <div className="App">
      <TodoInput
        text={newTodo.title}
        handleTitleChange={handleTitleChange}
        handleKeyDownEvent={handleKeyDownEvent}
      />
      <TodoFilter changeFilter={changeFilter} />
      <TodoList
        items={filteredTodos}
        changeTodoState={changeTodoState}
        deleteTodo={deleteTodo}
        changeTodoIsEditingProperty={changeTodoIsEditingProperty}
        editTodoTitle={editTodoTitle}
        handleKeyDownEventInEditInput={handleKeyDownEventInEditInput}
        deleteAllCompleted={deleteAllCompleted}
      />
      {/* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
    </div>
  );
}

export default App;
