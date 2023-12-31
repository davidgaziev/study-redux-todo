import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        order: state.todos.length + 1,
        text: action.payload.text,
        isCompleted: action.payload.isCompleted,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
    makeComplete: (state, action) => {
      state.todos.forEach((t) => {
        if (t.id != action.payload.id) return;
        t.isCompleted ? (t.isCompleted = false) : (t.isCompleted = true);
      });
    },
    removeCompleted: (state) => {
      state.todos = state.todos.filter((t) => t.isCompleted !== true);
    },
    reorder: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, removeTodo, makeComplete, removeCompleted, reorder } =
  todoSlice.actions;

export default todoSlice.reducer;
