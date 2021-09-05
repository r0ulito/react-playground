import { useEffect, useState } from 'react';
import './App.css';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const todoModel = {
  id: '',
  title: '',
  isCompleted : false,
  isEditing: false
} 
const App = () => {


  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(todoModel);
  const [currentFilter, setcurrentFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todoCounter, setTodoCounter] = useState(1);

useEffect(() => {
  console.log(filteredTodos)
}, [filteredTodos])

  const handleInputChange = (value) => {
      setNewTodo({
        id : todoCounter,
        title: value,
        isCompleted: false
      });
  }

  const changeTodoState = (todoId, isTodoCompleted) => {
    setTodos(todos.map((todo) => {
      if(todo.id === todoId) {
        return ({...todo, isCompleted: isTodoCompleted})
      }
      return todo
    }))
  }
  const changeTodoTitle = (todoId, value) => {
    console.log(`id is: ${todoId}`, `value is: ${value}`)
    setTodos(todos.map((todo) => {
      if(todo.id === todoId) {
        return ({...todo, title: value})
      }
      return todo
    }))
  }

  const changeTodoEditingState = (todoId) => {
    setTodos(todos.map((todo) => {
      if(todo.id === todoId) {
        return ({...todo, isEditing: true})
      } 
      return todo
    }))
  }

  const handleKeyDownInEditInput = (key, todoId) => {
    if(key === "Enter" || key === "Escape") {
      setTodos(todos.map((todo) => {
        if(todo.id === todoId) {
          return ({...todo, isEditing: false})
        } 
        return todo
      }))
    }
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todoId !== todo.id));

  }

  const handleInputKeyEvent = (key) => {
    if(key === "Enter") {
      if(newTodo.title !== '') {
        setTodos(state => ([
          ...state,
          newTodo
        ]));
        setNewTodo(Object.assign({}, todoModel, {title: ''}));
        setTodoCounter(oldCounter => oldCounter +1);
      }
     
    }
    if(key === "Escape") {
      setNewTodo(Object.assign({}, todoModel, {title: ''}));
    }
  }

  const handleFilterChange = (filter) => {
    console.log(filter);
    switch(filter) {
      case 'all':
        setcurrentFilter('all');
        break;
      case true:
        setcurrentFilter(filter);
        setFilteredTodos(todos.filter((todo) => filter === todo.isCompleted))
        break;
      case false:
        setcurrentFilter(filter);
        setFilteredTodos(todos.filter((todo) => filter === todo.isCompleted))
        break;
      default:
        break;
    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo React</h1>
        <TodoInput OnInputChange={handleInputChange} onKeyEvent={handleInputKeyEvent} text={newTodo.title}>Entrez une todo</TodoInput>
        <TodoFilter OnFilterChange={handleFilterChange} />
        <TodoList OnKeyDownInEditInput={handleKeyDownInEditInput} onEditingStateChange={changeTodoEditingState} onChangeTodoTitle={changeTodoTitle} onTodoCompletionChange={changeTodoState} onDeleteTodo={deleteTodo} items={currentFilter === 'all' ? todos : filteredTodos}/>
      </header>
    </div>
  );
}


export default App;
