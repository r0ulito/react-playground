//create reduxSlice

import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    id: 1,
  },
  reducers: {
    addTodo: (state, action) => {
      state.data = [
        ...state.data,
        {
          id: state.id,
          title: action.payload,
          isCompleted: false,
          isEditing: false,
        },
      ];
      state.id += 1;
    },
    toggleIsCompleted: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isCompleted: !item.isCompleted };
        }

        return item;
      });
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    deleteAllCompleted: (state) => {
      state.data = state.data.filter((item) => !item.isCompleted);
    },

    handleFilterChange: (state, action) => {
      state.filter = action.payload;
    },
    changeTodoIsEditingState: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isEditing: !item.isEditing };
        }

        return item;
      });
    },
    handleTitleChangeFromTodoInput: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.value,
            isEditing: !item.isEditing,
          };
        }

        return item;
      });
    },
  },
});

export const {
  addTodo,
  toggleIsCompleted,
  deleteTodo,
  deleteAllCompleted,
  handleFilterChange,
  changeTodoIsEditingState,
  handleTitleChangeFromTodoInput,
} = todoSlice.actions;

export default todoSlice.reducer;
