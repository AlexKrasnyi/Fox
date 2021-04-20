import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userTodosData, userTodoCompleted } from '../../userActions/userActions';
import './UserTodos.scss';


const UserTodos = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const todos = useSelector(state => state.reducerUserTodos);
  useEffect(() => {
    dispatch(userTodosData(id))
  }, [dispatch, id])

  const handleClick = (id) => {
    dispatch(userTodoCompleted(id));
  }
  const todoList = todos.map(todo => {
    return (
      <li className="userTodo" key={todo.id}>
        <input 
          type="checkbox" 
          name="checkbox" 
          defaultChecked={todo.completed ? true : false} 
          className="userTodo__input" id={todo.id} 
          onClick={()=>handleClick(todo.id)} 
        />
        <label htmlFor={todo.id} className={todo.completed ? "completed" : ""}>{todo.title}</label>
      </li>
    )
  })
  return (
    <ul>
    {todoList}
    </ul>
  )
}

export default UserTodos;