import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import './Header.scss';

const Header = () => {
  return(
    <header className='header'>
        <span className='header__logo'>
          <Link to='/'>
            LOGO
          </Link>
        </span>
        <div className='header__content'>
          <h1 className='header__title'>Title</h1>
          <Navigation />
        </div>
      </header>
    )
}

export default Header;
