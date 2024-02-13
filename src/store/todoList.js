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
    editTodo: (state, action) => {
      const { index, newText } = action.payload;
      state[index].text = newText;
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
