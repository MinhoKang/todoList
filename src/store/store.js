import { configureStore } from '@reduxjs/toolkit';
import toDoListSlice from './todoList';

export default configureStore({
  reducer: {
    todoList: toDoListSlice,
  },
});
