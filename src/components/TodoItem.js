import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, toggleComplete } from '../store/todoList';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.list);
  const itemIndex = todoList.findIndex((listItem) => listItem === todo);
  const [text, setText] = useState(todo.text);
  const [isRevise, setIsRevise] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(itemIndex));
  };

  const reviseTodo = () => {
    setIsRevise(true);
  };

  const handleRevise = (event) => {
    setText(event.target.value);
  };
  const cancelRevise = () => {
    setText(todo.text);
    setIsRevise(false);
  };
  const reviseComplete = () => {
    dispatch(editTodo({ index: itemIndex, newText: text }));
    setIsRevise(false);
  };
  const handleComplete = () => {
    dispatch(toggleComplete(itemIndex));
  };
  return (
    <div>
      {!isRevise ? (
        <div>
          <li>{todo.text}</li>
          <button onClick={handleDelete}>X</button>
          <button onClick={reviseTodo}>수정하기</button>
          <input type="checkbox" checked={todo.isComplete} onChange={handleComplete} />
        </div>
      ) : (
        <div>
          <input type="text" value={text} onChange={handleRevise} />
          <button onClick={cancelRevise}>취소</button>
          <button onClick={reviseComplete}>수정 완료</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
