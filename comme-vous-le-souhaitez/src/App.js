import "./App.css";
import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

let todoModel = {
  id: 1,
  title: "",
  editTitle: "",
  isCompleted: false,
  isEditing: false,
};

function App() {
  const [newTodo, setNewTodo] = useState(todoModel);
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleChange = (e) => {
    setNewTodo((prevState) => ({
      ...prevState,
      title: e.target.value,
      editTitle: e.target.value,
    }));
  };

  const handleKeyDown = (e) => {
    // Enter || Escape
    switch (e.key) {
      case "Escape":
        setNewTodo((prevState) => ({
          ...prevState,
          title: "",
        }));
        break;
      case "Enter":
        if (newTodo.title === "") return;
        setTodos((prevState) => [...prevState, newTodo]);
        setNewTodo(Object.assign({}, todoModel, { id: ++todoModel.id }));

        break;

      default:
        break;
    }
  };

  const handleTodoStateChange = (todoId) => {
    handleTodosMapping(todoId, "isCompleted")
  };
  // const changeTodoEditingState = (todoId) => {
  //   handleTodosMapping(todoId, "isEditing");
  // };

  const handleTodoItemTitleChange = (e, todoId) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (todoId === item.id) {
          return { ...item, editTitle: e.target.value };
        } else {
          return item;
        }
      })
    );
  };

  const handleUpdateTodo = (todoId, updateType = null, e = null ) => {
    setTodos(prevState => prevState.map(item => {
      if(todoId === item.id) {
        switch(updateType) {
          case "editing":
            return { ...item, isEditing: !item.isEditing}
            break;

          case "completing":
            return { ...item, isEditing: !item.isCompleted}
            break;

          case "titleChanging":
            return { ...item, editTitle: e.target.value}
            break;

            default:
              return item;
              break;
        }
      } else {
        return item
      }
    }))
  }


/**
 * Permet de changer une propriété. Si value est undefined => on inverse un booléen. Sinon on change la valeur
 * @param {Number} todoId 
 * @param {String} property The property to change
 * @param {String || undefined} value 
 */
  const handleTodosMapping = (todoId, property, value) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (todoId === item.id) {
          return { 
            ...item, 
            [property]: value ? value: !item[property] };
        } else {
          return item;
        }
      })
    );
    
  }

  const handleFilterChange = (filter) => {
    if (filter === undefined) {
      setFilteredTodos(todos);
      return;
    }
    setFilteredTodos(todos.filter((todo) => todo.isCompleted === filter));
  };

  const handleTodoDeleting = (todoId = false) => {
    if(todoId) {
      setTodos((prevState) => prevState.filter((item) => item.id !== todoId));
      return
    }
    setTodos((prevState) => prevState.filter((todo) => !todo.isCompleted));
  }

  const handleTodoInputKeyDown = (e, todoId) => {
    console.log(e.target.value);

    if (e.key === "Escape") {
      setTodos((prevState) =>
        prevState.map((item) => {
          if (todoId === item.id) {
            return { ...item, isEditing: false, editTitle: item.title };
          } else {
            return item;
          }
        })
      );
    }

    if (e.key === "Enter") {
      setTodos((prevState) =>
        prevState.map((item) => {
          if (todoId === item.id) {
            return { ...item, isEditing: false, title: item.editTitle };
          } else {
            return item;
          }
        })
      );
    }
  };

  return (
    <div className="App">
      <TodoInput
        title={newTodo.title}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <TodoFilter handleFilterChange={handleFilterChange} />
      <TodoList
        items={filteredTodos}
        // deleteAllCompleted={deleteAllCompleted}
        // deleteTodo={deleteTodo}
        handleTodoInputKeyDown={handleTodoInputKeyDown}
        handleTodoItemTitleChange={handleTodoItemTitleChange}
        handleTodosMapping={handleTodosMapping}
        handleTodoDeleting={handleTodoDeleting}
      />
    </div>
  );
}

export default App;
