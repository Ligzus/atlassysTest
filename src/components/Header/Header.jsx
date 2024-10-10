import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
        <div className="logoContainer">
            <img src="credit-card.png" className="logo" alt="logo" />
            <h1>BankDash.</h1>
        </div>

        
        <div className='header-right'>
        <h2>Settings</h2>
            <div className="search-bar">
                <input type="text" placeholder="Search for something" />
            </div>
            <div className="user-profile">
                <img src="path-to-user-image" alt="User" />
            </div>
        </div>
      
    </header>
  );
};

export default Header;
