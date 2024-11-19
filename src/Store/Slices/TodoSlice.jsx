
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [
    ],
  };

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        name: action.payload.name,
        hasDone: false,
      };
      state.todos.push(newTodo);
    },
  
    toggleTodo: (state, action) => {
      const id = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.hasDone = !existingTodo.hasDone;
      }
    },
   
    editTodo: (state, action) => {
      const { id, newName } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.name = newName; 
      }
    },
   
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
