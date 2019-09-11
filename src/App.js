import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import DialogsConrainer from './components/Dialogs/DialogsConrainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import LoginPage from "./components/Login/Login.jsx";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="app__wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app__content">
          <Route path="/dialogs"
                 render={() => <DialogsConrainer/>}/>

          <Route path="/profile/:userId?"
                 render={() => <ProfileContainer/>}/>

          <Route path="/users"
                 render={() => <UsersContainer/>}/>

          <Route path="/login"
                 render={() => <LoginPage/>}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose( withRouter, connect(mapStateToProps, {initializeApp}) ) (App);

const ContainerJSApp = (props) => {
  return <BrowserRouter>
          <Provider store={store}>
            <AppContainer/>
          </Provider>
        </BrowserRouter>
};

export default ContainerJSApp;