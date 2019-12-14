import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Tree from './tree';
import store from './store';

ReactDOM.render(
  <Provider store={ store }>
      <Tree />
  </Provider>,    
  document.getElementById('root')
);