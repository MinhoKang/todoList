import { createSlice } from '@reduxjs/toolkit';

let todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    list: [],
    filteredList: [],
    showList: [],
    filter: 'all',
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
      state.showList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list.splice(action.payload, 1);
      state.showList.splice(action.payload, 1);
    },
    editTodo: (state, action) => {
      const { index, newText } = action.payload;
      state.list[index].text = newText;
      state.showList[index].text = newText;
    },
    toggleComplete: (state, action) => {
      const itemIndex = state.list.findIndex((listItem) => listItem.id === action.payload);
      state.list[itemIndex].isComplete = !state.list[itemIndex].isComplete;
      state.showList = [...state.list]
    },
    toggleFilter: (state, action) => {
      state.filter = action.payload;

      switch (state.filter) {
        case 'active':
          state.showList = state.list.filter((item) => !item.isComplete);
          break;
        case 'completed':
          state.showList = state.list.filter((item) => item.isComplete);
          break;
        default:
          state.showList = state.list;
          break;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleComplete, toggleFilter } =
  todoListSlice.actions;
export default todoListSlice.reducer;
