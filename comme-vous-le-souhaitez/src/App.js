import logo from "./logo.svg";
import "./App.css";
import { TodoFilter, TodoList, TodoItem, TodoInput } from "./components";
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
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [title, setTitle] = useState()

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleChange = (e) => {
    setNewTodo((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handleKeyDown = (e) => {
    // @TODO: exporter ceci dans une fonction
    switch (e.key) {
      case "Escape":
        setNewTodo((prevState) => ({
          ...prevState,
          title: "",
        }));
        break;

      case "Enter":
        setTodos((prevState) => [...prevState, newTodo]);
        setNewTodo(Object.assign({}, todoModel, { id: ++todoModel.id }));
        break;
      default:
        break;
    }
  };

  const handleTodoStateChange = (todoId) => {
    // avec cet id, il faut qu'on puisse modifier todos
    // pour faire en sorte d'inverser isCompleted sur l'element qui a la property id = todoId

    setTodos((prevState) => [
      ...prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, isCompleted: !item.isCompleted };
        }

        return item;
      }),
    ]);
  };

  const deleteTodo = (todoId) => {
    // avec cet id, il faut qu'on puisse modifier todos
    // Pour filtrer l'élement qui match avec todoId

    setTodos((prevState) => [
      ...prevState.filter((item) => item.id !== todoId),
    ]);
  };

  const changeFilter = (filter) => {
    if (filter === undefined) {
      setFilteredTodos(todos);
      return;
    }
    setFilteredTodos(todos.filter((item) => item.isCompleted === filter));
  };

  const handleTodoEditingState = (todoId) => {
    setTodos((prevState) => [
      ...prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, isEditing: !item.isEditing };
        }

        return item;
      }),
    ]);
  };

  const handleKeyDownFromTodoInput = (key, oldTitle, todoId) => {

    console.log(key)
    switch (key) {
      case "Escape":
        setTodos((prevState) => [
          ...prevState.map((item) => {
            if (item.id === todoId) {
              return { ...item, title: oldTitle, isEditing: !item.isEditing };
            }

            return item;
          }),
        ]);
        break;

        case "Enter":
          setTodos((prevState) => [
            ...prevState.map((item) => {
              if (item.id === todoId) {
                return { ...item, isEditing: !item.isEditing };
              }  
              return item;
            }),
          ]);
          break;


      default:
        break;
    }
  };

  const handleChangeInTodoInput = (value, todoId) => {
    setTodos(prevState => ([
      ...prevState.map((item) => {
        if(item.id === todoId) {
          return {...item, title: value}
        }

        return item
      })
    ]))
  };

  const deleteAllCompleted = () => {
    setTodos(prevState => ([
      ...prevState.filter((todo) => !todo.isCompleted)
    ]))
  }

  return (
    <div className="App">
      <h2>Todo App</h2>
      <TodoInput
        handleChange={handleChange}
        todoTitle={newTodo.title}
        handleKeyDown={handleKeyDown}
      />
      <TodoFilter changeFilter={changeFilter} />
      <TodoList
        items={filteredTodos}
        handleTodoStateChange={handleTodoStateChange}
        deleteTodo={deleteTodo}
        handleTodoEditingState={handleTodoEditingState}
        handleKeyDownFromTodoInput={handleKeyDownFromTodoInput}
        handleChangeInTodoInput={handleChangeInTodoInput}
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
