import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link} from 'react-router-dom';
import './User.scss';

const User = ({user}) => {
    const {path} = useRouteMatch();
    return(
      <li className='users__item' key={user.id}>
        <div className='users__name'>Name: <Link to={`${path}${user.id}`}>{user.name}</Link></div>
        <div>UserName: {user.username}</div>
      </li>
    )
  }

export default User;