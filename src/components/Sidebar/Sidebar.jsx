import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <svg className="icon">
						<use xlinkHref="./icon/sprite.svg#icon-home" />
					</svg>
          Dashboard
        </li>
        <li>
          <svg className="icon">
						<use xlinkHref="./icon/sprite.svg#icon-transactions" />
					</svg>
          Transactions
        </li>
        <li>
          <svg className="icon">
						<use xlinkHref="./icon/sprite.svg#icon-acc" />
					</svg>
          Accounts
        </li>
        <li>
          <svg className="icon">
						<use xlinkHref="./icon/sprite.svg#icon-invest" />
					</svg>
          Investments
        </li>
        <li>
          <svg className="icon">
						<use xlinkHref="./icon/sprite.svg#icon-credit" />
					</svg>
          Credit Cards
        </li>
        <li>
          <svg className="icon">
						<use xlinkHref="./icon/sprite.svg#icon-loan" />
					</svg>
          Loans
        </li>
        <li>
          <svg className="icon">
						<use xlinkHref="./icon/sprite.svg#icon-services" />
					</svg>
          Services
        </li>
        <li>
          <svg className="icon">
						<use xlinkHref="./icon/sprite.svg#icon-privileges" />
					</svg>
          My Privileges
        </li>
        <li>
          <svg className="icon">
						<use xlinkHref="./icon/sprite.svg#icon-settings" />
					</svg>
          Settings
        </li>
      </ul>

      {/* Мобильное меню */}
      <div className="mobile-menu">
        <button>Menu</button>
      </div>
    </aside>
  );
};

export default Sidebar;
