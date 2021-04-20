import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './components/todoItem/TodoItem';
import { todoData } from './todoListActions/todoActions';
import './TodoList.scss';



const TodoList = () => {
  const todos = useSelector(state => state.reducerTodos);  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoData('https://jsonplaceholder.typicode.com/todos'))
  }, [dispatch])
  const items = todos.map((item) => {
    return (
      <li key={item.id} className='todoList__item'>
        <TodoItem value={item.title}/>
      </li>
    )
  });

  return (
    <div className="todoList">
      <h2>Todo</h2>
      <ul className='todoList__list'>
        {items}
      </ul>
    </div>
  )
};

export default TodoList;