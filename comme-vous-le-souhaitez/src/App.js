import { useEffect, useState } from "react";
import "./App.css";
import { TodoInput, TodoFilter, TodoList } from "./components";

const todoModel = {
  id: 1,
  title: "",
  editTitle: "",
  isCompleted: false,
  isEditing: false,
};

function App() {
  const [newTodo, setNewTodo] = useState(todoModel);
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos);
    console.log(todos);
  }, [todos]);

  const handleChange = (title) => {
    setNewTodo((state) => ({
      ...state,
      title,
      editTitle: title
    }));
  };

  const handleChangeFromTodoInput = (e, todoId) => {
    let { value } = e.target;

    mapTodos(todoId, "editTitle", value)
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Enter":
        if (newTodo.title === "") return;
        setTodos((prevState) => [...prevState, newTodo]);
        setNewTodo({ ...todoModel, title: "", id: ++todoModel.id });

        break;
      case "Escape":
        setNewTodo((prevState) => ({ ...prevState, title: "" }));
        break;

      default:
        break;
    }
  };

  const handleKeyDownFromTodoInput = (key, todoId) => {
    switch (key) {
      case "Enter":

      handleTitleChange(todoId, "editTitle", "title")
        changeTodoIsEditingProperty(todoId, false);
        break;

      case "Escape":
        handleCancel(todoId);
        break;

      default:
        break;
    }
  };


  const handleCancel = (todoId) => {
    handleTitleChange(todoId, "title", "editTitle")
    changeTodoIsEditingProperty(todoId, false);

  }

  const toggleIsCompletedProperty = (todoId) => {
    mapTodos(todoId, "isCompleted");
  };

  const changeTodoIsEditingProperty = (todoId, value = true) => {
    mapTodos(todoId, "isEditing", value)
  };

  const deleteTodo = (todoId) => {
    setTodos((prevState) => [
      ...prevState.filter((item) => item.id !== todoId),
    ]);
  };

  const changeFilter = (filter = "all") => {
    console.log(filter);
    if (filter === "all") {
      setFilteredTodos(todos);
      return;
    }
    setFilteredTodos([...todos.filter((item) => item.isCompleted === filter)]);
  };

  const deleteAllCompleted = () => {
    setTodos(prevState => [
      ...prevState.filter(item => !item.isCompleted)
    ])
  }

  const mapTodos = (todoId, property, value) => {
    setTodos(prevState => [
      ...prevState.map(item => {
        if(item.id === todoId) {
          return {
            ...item,
            [property] : value ? value : !item[property]
          }  
        } else {
          return item
        }    
      })
    ])  
  }

  const handleTitleChange = (todoId, previousTitleProperty, newTitleProperty) => {
    setTodos(prevState => [
      ...prevState.map(item => {
        if (item.id === todoId) {
          return {
            ...item,
            [newTitleProperty]: item[previousTitleProperty],
          };
        } else {
          return item;
        }
      })
    ])
  }

  return (
    <div className="App">
      <TodoInput
        title={newTodo.title}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <TodoFilter changeFilter={changeFilter} />
      <TodoList
        items={filteredTodos}
        toggleIsCompletedProperty={toggleIsCompletedProperty}
        deleteTodo={deleteTodo}
        changeTodoIsEditingProperty={changeTodoIsEditingProperty}
        handleChangeFromTodoInput={handleChangeFromTodoInput}
        handleKeyDownFromTodoInput={handleKeyDownFromTodoInput}
        handleCancel={handleCancel}
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
