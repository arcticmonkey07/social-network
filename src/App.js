import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {Route} from 'react-router-dom';

const App = (props) => {
  return (
    <div className="app__wrapper">
      <Header />
      <Navbar />
      <div className="app__content">
        <Route path="/dialogs" 
               render={ () => <Dialogs 
                  state={props.state.dialogsPage} /> }/>

        <Route path="/profile" 
               render={ () => <Profile 
                  profilePage={props.state.profilePage} 
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
         /> } />
      </div>
    </div>
  );
}

export default App;
