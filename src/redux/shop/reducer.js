import {
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_ERROR,
} from 'src/redux/shop/types';

export const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: null,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case FETCH_COLLECTION_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
