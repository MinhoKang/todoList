import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../store/todoList';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);
  const itemIndex = todoList.findIndex((listItem) => listItem === todo);
  const handleDelete = () => {
    dispatch(deleteTodo(itemIndex));
  };
  const reviseTodo = () => {
    dispatch(reviseTodo(itemIndex));
  };
  return (
    <div>
      <li>{todo.text}</li>
      <button onClick={handleDelete}>X</button>
      <button onClick={reviseTodo}>수정하기</button>
    </div>
  );
};

export default TodoItem;
