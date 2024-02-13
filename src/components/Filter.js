import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../store/todoList';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = (event) => {
    const selectedFilter = event.target.value;
    console.log(selectedFilter);
    dispatch(toggleFilter(selectedFilter));
  };


  return (
    <div>
      <select onChange={changeFilter}>
        <option value="all">all</option>
        <option value="active">active</option>
        <option value="completed">completed</option>
      </select>
    </div>
  );
};

export default Filter;
