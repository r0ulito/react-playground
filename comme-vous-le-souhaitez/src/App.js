import logo from "./logo.svg";
import "./App.css";
import { TodoFilter, TodoList, TodoInput } from "./components";
import { useEffect, useState } from "react";

const todoModel = {
  id: 1,
  title: '',
  editTitle : '',
  isCompleted: false,
  isEditing: false,
};

function App() {
  const [newTodo, setNewTodo] = useState(todoModel);
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  /*   useEffect(() => {
    console.log(newTodo);
  }, [newTodo]);

  useEffect(() => {
    console.log(todos);
  }, [todos]); */

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  useEffect(() => {
    console.log(filteredTodos);
  }, [filteredTodos]);

  const handleChange = (e) => {
    setNewTodo((prevState) => ({
      ...prevState,
      title: e.target.value,
      editTitle: e.target.value
    }));
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Enter":
        if (newTodo.title === "") return;
        setTodos((prevState) => [...prevState, newTodo]);
        setNewTodo(Object.assign({}, todoModel, { id: ++todoModel.id }));

        break;

      case "Escape":
        setNewTodo((prevState) => ({
          ...prevState,
          title: "",
        }));

        break;

      default:
        break;
    }
  };

  const handleTodoStateChange = (todoId) => {
    // console.log(todoId)
    setTodos((prevState) => [
      ...prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      }),
    ]);
  };

  const deleteTodo = (todoId) => {
    // avec cet id il faut qu'on puisse update la liste des todos
    // pour supprimer l'élément qui match avec l'argument todoId

    setTodos((prevState) => [
      ...prevState.filter((item) => item.id !== todoId),
    ]);
  };

  const handleFilterChange = (filter) => {
    if (filter === undefined) {
      setFilteredTodos(todos);
      return;
    }
    setFilteredTodos(todos.filter((item) => item.isCompleted === filter));
  };

  const changeTodoEditingState = (todoId) => {
    setTodos((prevState) => [
      ...prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, isEditing: !item.isEditing };
        } else {
          return item;
        }
      }),
    ]);
  };
  const handleChangeFromTodoInput = (e, todoId) => {
    let { value } = e.target;
    setTodos((prevState) => [
      ...prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, editTitle: value };
        } else {
          return item;
        }
      }),
    ]);

    console.log(e.target.value)
  }

  const handleKeyDownFromTodoInput = (e, todoId) => {
    switch (e.key) {
      case "Enter":
        setTodos((prevState) => [
          ...prevState.map((item) => {
            if (item.id === todoId) {
              return { ...item, title: item.editTitle };
            } else {
              return item;
            }
          }),
        ]);
        changeTodoEditingState(todoId)

      // valider le nouveau titre
        break;

      case "Escape":
        setTodos((prevState) => [
          ...prevState.map((item) => {
            if (item.id === todoId) {
              return { ...item, editTitle: item.title };
            } else {
              return item;
            }
          }),
        ]);
        changeTodoEditingState(todoId)

      // annuler la saisie (on revient sur l'ancien title)
        break;

      default:
        break;
    }
    
  };

  const deleteAllCompleted = () => {

    setTodos((prevState) => [
      ...prevState.filter((item) => !item.isCompleted),
    ]);

  }



  return (
    <div className="App">
      <TodoInput
        todoTitle={newTodo.title}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <TodoFilter handleFilterChange={handleFilterChange} />
      <TodoList
        items={filteredTodos}
        handleTodoStateChange={handleTodoStateChange}
        deleteTodo={deleteTodo}
        changeTodoEditingState={changeTodoEditingState}
        handleKeyDownFromTodoInput={handleKeyDownFromTodoInput}
        handleChangeFromTodoInput={handleChangeFromTodoInput}
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
