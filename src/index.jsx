import React from 'react';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from 'src/redux/store';
import 'src/scss/main.scss';

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
