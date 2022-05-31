import "./App.css";
import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

let todoModel = {
  id: 1,
  title: '',
  editTitle : '',
  isCompleted : false,
  isEditing: false
}

function App() {

  const [newTodo, setNewTodo] = useState(todoModel);
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos])


  const handleChange = (e) => {
    setNewTodo(prevState => ({
      ...prevState,
      title: e.target.value,
      editTitle : e.target.value
    }))
  };

  const handleKeyDown = (e) => {
    // Enter || Escape
    switch(e.key) {
      case "Escape":
        setNewTodo(prevState => ({
          ...prevState,
          title: ''
        }))
        break;
        case "Enter":
          if(newTodo.title === "") return
          setTodos(prevState => ([
            ...prevState,
            newTodo
          ]));
          setNewTodo(Object.assign({}, todoModel, { id: ++todoModel.id}))

          break;

          default:
            break;
    }
  }

  const handleTodoStateChange = (todoId) => {
    setTodos(prevState => prevState.map(item => {
      if(todoId === item.id) {
        return { ...item, isCompleted: !item.isCompleted}
      } else {
        return item
      }
    }))
  }

  const handleFilterChange = (filter) => {
    if(filter === undefined) {
      setFilteredTodos(todos)
      return;
    }
    setFilteredTodos(todos.filter(todo => todo.isCompleted === filter));

  }

  const deleteTodo = (todoId) => {
    setTodos(prevState => prevState.filter(item => item.id !== todoId))
  }

  const deleteAllCompleted = () => {
    setTodos(prevState => prevState.filter(todo => !todo.isCompleted))
  }

  const changeTodoEditingState = (todoId) => {

    setTodos(prevState => prevState.map(item => {
      if(todoId === item.id) {
        return { ...item, isEditing: !item.isEditing}
      } else {
        return item
      }
    }))
    
    console.log(todoId)

  }


  const handleTodoInputKeyDown = (e, todoId) => {
    console.log(e.target.value)

    if(e.key === "Escape") {
      setTodos(prevState => prevState.map(item => {
        if(todoId === item.id) {
          return { ...item, isEditing: false, editTitle : item.title}
        } else {
          return item
        }
      }))
    }

    if(e.key === "Enter") {
      setTodos(prevState => prevState.map(item => {
        if(todoId === item.id) {
          return { ...item, isEditing: false, title: item.editTitle}
        } else {
          return item
        }
      }))
    }
  }

  const handleTodoItemTitleChange = (e, todoId) => {
    setTodos(prevState => prevState.map(item => {
      if(todoId === item.id) {
        return { ...item, editTitle: e.target.value}
      } else {
        return item
      }
    }))

  }






  return (
    <div className="App">

      <TodoInput title={newTodo.title} handleChange={handleChange} handleKeyDown={handleKeyDown} />
      <TodoFilter handleFilterChange={handleFilterChange} />
      <TodoList items={filteredTodos} handleTodoStateChange={handleTodoStateChange} deleteAllCompleted={deleteAllCompleted} deleteTodo={deleteTodo} changeTodoEditingState={changeTodoEditingState} handleTodoInputKeyDown={handleTodoInputKeyDown} handleTodoItemTitleChange={handleTodoItemTitleChange} />
      {/* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
    </div>
  );
}

export default App;
