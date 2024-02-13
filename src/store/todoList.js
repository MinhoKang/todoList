import { createSlice } from '@reduxjs/toolkit';

let todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
    reviseTodo: (state, action) => {
      state[action.payload].text = action.payload;
    },
  },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
