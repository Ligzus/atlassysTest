import React from 'react';
import './assets/scss/main.scss';
import Header from './components/Header/Header';
import ProfileForm from './components/ProfileForm/ProfileForm';
import Sidebar from './components/Sidebar/Sidebar';
import TabMenu from './components/TabMenu/TabMenu';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
       
        <div className="profile">
          <TabMenu />
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default App;