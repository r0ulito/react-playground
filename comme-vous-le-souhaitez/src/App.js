import { createRef, useEffect, useState } from "react";
import "./App.css";
import TodoFilter from "./components/TodoFilter";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

let todoModel = {
  id: 1,
  title: "",
  editTitle: "",
  isCompleted: false,
  isEditing: false,
};

function App() {
  const [newTodo, setNewTodo] = useState(todoModel);

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "bonjour",
      editTitle: "bonjour",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 2,
      title: "hello",
      editTitle: "hello",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 3,
      title: "pouet",
      editTitle: "pouet",
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const [filteredTodos, setFilteredTodos] = useState([]);

  const [filter, setFilter] = useState(undefined);

  const ref = createRef();

  useEffect(() => {
    if (filter === undefined) {
      setFilteredTodos(todos);
      return;
    }

    setFilteredTodos(todos.filter((item) => item.isCompleted === filter));
  }, [todos, filter]);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleTitleChange = (title) => {
    setNewTodo({
      ...newTodo,
      title,
      editTitle: title,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (newTodo.title === "") return;
      setTodos((prevState) => [...prevState, newTodo]);
      setNewTodo(Object.assign({}, todoModel, { id: ++todoModel.id }));
    }

    if (event.key === "Escape") {
      handleTitleChange("");
    }
  };

  const toggleIsCompleted = (todoId) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      })
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((prevState) => [
      ...prevState.filter((item) => item.id !== todoId),
    ]);
  };

  const changeTodoIsEditingState = (todoId) => {
    setTodos((prevState) => [
      ...prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, isEditing: !item.isEditing };
        }

        return item;
      }),
    ]);
  };

  const handleKeyDownFromTodoInput = (key, todoId) => {
    console.log(key);
    if (key === "Escape") {
      setTodos((prevState) => [
        ...prevState.map((item) => {
          if (item.id === todoId) {
            return { ...item, editTitle: item.title };
          }

          return item;
        }),
      ]);
      changeTodoIsEditingState(todoId);
    }

    if (key === "Enter") {
      setTodos((prevState) => [
        ...prevState.map((item) => {
          if (item.id === todoId) {
            return { ...item, title: item.editTitle };
          }

          return item;
        }),
      ]);
      changeTodoIsEditingState(todoId);
    }
  };

  const handleTitleChangeFromTodoInput = (event, todoId) => {
    let { value } = event.target;
    setTodos((prevState) => [
      ...prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, editTitle: value };
        }

        return item;
      }),
    ]);
  };

  const deleteAllCompleted = () => {

    setTodos((prevState) => [
      ...prevState.filter((item) => !item.isCompleted),
    ]);
        
  }

  return (
    <div className="App">
      <TodoInput
        ref={ref}
        title={newTodo.title}
        handleTitleChange={handleTitleChange}
        handleKeyDown={handleKeyDown}
      />
      <TodoFilter handleFilterChange={setFilter} />
      <TodoList
        items={filteredTodos}
        toggleIsCompleted={toggleIsCompleted}
        deleteTodo={deleteTodo}
        changeTodoIsEditingState={changeTodoIsEditingState}
        handleKeyDownFromTodoInput={handleKeyDownFromTodoInput}
        handleTitleChangeFromTodoInput={handleTitleChangeFromTodoInput}
        deleteAllCompleted={deleteAllCompleted}
      />
    </div>
  );
}

export default App;
