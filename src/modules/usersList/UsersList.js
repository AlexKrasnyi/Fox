import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { usersData } from './userListActions/usersActions';
import User from './components/user/User';
import './UsersList.scss';

const UsersList = () => {
  const users = useSelector(state => state.reducerUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersData('https://jsonplaceholder.typicode.com/users'))
  }, [dispatch])

  const user = users.map(user => {
    return <User user={user} key={user.id}/>
  });

  return (
    <div className="users">
      <h2>Users</h2>
      <ul className='users__list' >
        {user}
      </ul> 
    </div>
  )
}

export default UsersList;
