import React from 'react';
import ReactDOM from 'react-dom';
import ContainerJSApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContainerJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
