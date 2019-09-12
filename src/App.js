import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import LoginPage from "./components/Login/Login.jsx";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsConrainer = React.lazy(() => import('./components/Dialogs/DialogsConrainer.jsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.jsx'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer.jsx'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div>
          <HeaderContainer/>
          <div className='app__main'>
            <Navbar/>
            <div className="app__content">
              <Route path="/dialogs"
                     render={withSuspense(DialogsConrainer)}/>
              <Route path="/profile/:userId?"
                     render={withSuspense(ProfileContainer)}/>
              <Route path="/users"
                     render={withSuspense(UsersContainer)}/>
              <Route path="/login"
                     render={() => <LoginPage/>}/>
            </div>
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
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
            <AppContainer/>
          </Provider>
        </BrowserRouter>
};

export default ContainerJSApp;