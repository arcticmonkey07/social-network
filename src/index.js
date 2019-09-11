import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContainerJSApp from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ContainerJSApp />, document.getElementById('root'));


serviceWorker.unregister();
