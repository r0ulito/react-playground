import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoInput, TodoFilter, TodoList } from "./components";

let todoModel = {
  id: 1,
  title: "",
  isCompleted: false,
  isEditing: false,
  editTitle: "",
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
    console.log("todos", todos);
  }, [currentFilter, todos]);

  const handleChange = (e) => {
    setNewTodo({
      ...newTodo,
      title: e.target.value,
      editTitle: e.target.value
    });
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        setNewTodo({
          ...newTodo,
          title: "",
          editTitle: ""
        });
        break;

      case "Enter":
        setTodos((prevState) => [...prevState, newTodo]);
        Object.assign(todoModel, { id: todoModel.id + 1 });
        setNewTodo(todoModel);

        break;

      default:
        break;
    }
  };

  const changeTodoState = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };

  const changeFilter = (filter) => {
    setCurrentFilter(filter);
  };

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => id !== todo.id));
  };

  const deleteAllCompleted = () => {
    setTodos((prevState) => prevState.filter((todo) => !todo.isCompleted));
  };

  const changeTodoEditingState = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEditing: true,
          };
        }
        return todo;
      })
    );
  };

  const changeTodoTitle = (id, editTitle) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            editTitle,
          };
        }
        return todo;
      })
    );
  };

  const handleKeyDownInTodoInput = (id, key) => {
    switch (key) {
      case "Enter":
        setTodos((prevState) =>
          prevState.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                isEditing: false,
                title: todo.editTitle
              };
            }
            return todo;
          })
        );
        break;
        case "Escape":
          setTodos((prevState) =>
          prevState.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                isEditing: false,
                editTitle: todo.title
              };
            }
            return todo;
          })
        );
        break;


      default:
        break;
    }

    console.log(id, key);
  };

  return (
    <div className="App">
      <TodoInput
        title={newTodo.title}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <TodoList
        items={filteredTodos}
        changeTodoState={changeTodoState}
        deleteTodo={deleteTodo}
        deleteAllCompleted={deleteAllCompleted}
        changeTodoEditingState={changeTodoEditingState}
        changeTodoTitle={changeTodoTitle}
        handleKeyDownInTodoInput={handleKeyDownInTodoInput}
      />
      {/* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
      <TodoFilter changeFilter={changeFilter} />
    </div>
  );
}

export default App;
