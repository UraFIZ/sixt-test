import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'src/utils/redux/logger-middleware';
import regeneratorRuntime from 'regenerator-runtime';

import rootReducer from './root-reducer';

const middleware = [reduxThunk, logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
