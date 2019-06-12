import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import DialogsConrainer from './components/Dialogs/DialogsConrainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import {Route} from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";

const App = (props) => {
  return (
    <div className="app__wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app__content">
        <Route path="/dialogs" 
               render={ () => <DialogsConrainer /> }/>

        <Route path="/profile/:userId?"
               render={ () => <ProfileContainer /> } />
        <Route path="/users" 
               render={ () => <UsersContainer /> } />
      </div>
    </div>
  );
}

export default App;
