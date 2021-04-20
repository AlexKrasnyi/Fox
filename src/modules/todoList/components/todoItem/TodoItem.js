import React from 'react';
import './TodoItem.scss';

const TodoItem =({value}) => {
  return (
    <span className='todoItem'>
      <span className='todoItem__value'>{value}</span>
    </span>
  )
}

export default TodoItem;