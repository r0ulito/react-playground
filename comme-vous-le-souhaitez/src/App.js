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

  const [todos, setTodos] = useState([]);

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
      if (newTodo.title.trim() === "") return;
      setTodos((prevState) => [...prevState, newTodo]);
      setNewTodo(Object.assign({}, todoModel, { id: ++todoModel.id }));
    }

    if (event.key === "Escape") {
      handleTitleChange("");
    }
  };

  const toggleIsCompleted = (todoId) => {
    toggleToDoProperty(todoId, "isCompleted");
  };
  const changeTodoIsEditingState = (todoId) => {
    toggleToDoProperty(todoId, "isEditing");
  };

  const toggleToDoProperty = (todoId, property) => {
    setTodos((prevState) => [
      ...prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, [property]: !item[property] };
        }

        return item;
      }),
    ]);
  };

  const deleteTodo = (todoId) => {
    setTodos((prevState) => [
      ...prevState.filter((item) => item.id !== todoId),
    ]);
  };

  const handleKeyDownFromTodoInput = (key, todoId) => {
    let todo = todos.find((item) => item.id === todoId);
    if (key === "Escape") {
      replaceTitle("editTitle", "title", todoId);
    }

    if (key === "Enter") {
      if (todo.editTitle.trim() === "") return;
      replaceTitle("title", "editTitle", todoId);
    }
  };


  /**
   * handle title switch between title and editTitle according to key pressed (Enter | Escape)
   * @param {String} from the name of the property
   * @param {String} to the name of the property
   * @param {Number} todoId the todo's id
   */

  const replaceTitle = (from, to, todoId) => {
    setTodos((prevState) => [
      ...prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, [from]: item[to] };
        }

        return item;
      }),
    ]);
    changeTodoIsEditingState(todoId);
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
    setTodos((prevState) => [...prevState.filter((item) => !item.isCompleted)]);
  };

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
