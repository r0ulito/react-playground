import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    filteredTodos: [],
    filter: undefined,
  },
  reducers: {
    createTodo: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    deleteAllCompletedTodos: (state) => {
      state.data = state.data.filter((todo) => !todo.isCompleted);
    },
    changeTodoIsCompletedState: (state, action) => {
      state.data = state.data.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    },
    changeTodoIsEditingState: (state, action) => {
      state.data = state.data.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isEditing: true,
          };
        }
        return todo;
      });
    },

    updateTodoTitle: (state, action) => {
      state.data = state.data.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            editTitle: action.payload.text,
          };
        }

        return todo;
      });
    },
    resetTodoTitle: (state, action) => {
      state.data = state.data.map((todo) => {
        console.log("payload id", action.payload.id);
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            editTitle: todo.title,
            isEditing: !todo.isEditing,
          };
        }

        return todo;
      });
    },

    updateTodo: (state, action) => {
      state.data = state.data.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: todo.editTitle,
            isEditing: !todo.isEditing,
          };
        }

        return todo;
      });
    },

    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  createTodo,
  deleteTodo,
  deleteAllCompletedTodos,
  changeTodoIsCompletedState,
  changeTodoIsEditingState,
  updateTodoTitle,
  resetTodoTitle,
  updateTodo,
  changeFilter,
} = todoSlice.actions;

export const selectTodos = (state) => state.todos.data;

export default todoSlice.reducer;
