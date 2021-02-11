import { combineReducers } from 'redux';
import { shopReducer } from 'src/redux/shop/reducer';

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;
