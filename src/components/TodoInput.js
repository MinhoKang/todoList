import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleFilter } from '../store/todoList';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue);
  const dispatch = useDispatch();

  const nowFilter = useSelector((state) => state.todoList.filter);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addListItem = () => {
    if (inputValue.trim() !== '') {
      dispatch(
        addTodo({
          id: getId(),
          text: inputValue,
          isComplete: false,
        })
      );
    }
    if (!inputValue) {
      alert('내용을 입력하세요');
    }
    setInputValue('');

    dispatch(toggleFilter(nowFilter));
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addListItem}>ADD</button>
    </div>
  );
};
let id = 0;
function getId() {
  return id++;
}

export default TodoInput;
