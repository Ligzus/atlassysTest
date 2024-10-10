import React, { useState } from 'react';
import './tabMenu.scss';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile');

  return (
    <nav className="tab-menu">
      <ul>
        <li 
          className={activeTab === 'Edit Profile' ? 'active' : ''}
          onClick={() => setActiveTab('Edit Profile')}
        >
          Edit Profile
        </li>
        <li 
          className={activeTab === 'Preferences' ? 'active' : ''}
          onClick={() => setActiveTab('Preferences')}
        >
          Preferences
        </li>
        <li 
          className={activeTab === 'Security' ? 'active' : ''}
          onClick={() => setActiveTab('Security')}
        >
          Security
        </li>
      </ul>
    </nav>
  );
};

export default TabMenu;
