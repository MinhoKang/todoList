import './App.css';
import styled from 'styled-components';
import TodoInput from './components/TodoInput';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './components/TodoItem';
import Filter from './components/Filter';
import { useEffect } from 'react';

function App() {
  const todoList = useSelector((state) => state.todoList.showList);
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <h2>투두리스트</h2>
        <TodoInput />
      </div>
      <h2>List</h2>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <Filter />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
