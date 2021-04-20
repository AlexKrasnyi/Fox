import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className='header__nav'>
      <ul className='header__list'>
        <li className='header__lidtItem'><Link to='/posts/'>Post List</Link></li>
        <li className='header__lidtItem'><Link to='/todos/'>Todo List</Link></li>
        <li className='header__lidtItem'><Link to='/users/'>Users List</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;