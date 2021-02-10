import {
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_ERROR,
} from 'src/redux/shop/types';

const fetchCollectionStart = () => ({
  type: FETCH_COLLECTION_START,
});

const fetchCollectionFailed = (error) => ({
  type: FETCH_COLLECTION_ERROR,
  payload: error,
});

const fetchCollectionSuccess = (data) => ({
  type: FETCH_COLLECTION_SUCCESS,
  payload: data,
});

export const fetchOffers = () => (dispatch) => {
  dispatch(fetchCollectionStart());
  try {
    dispatch(fetchCollectionSuccess());
  } catch (error) {
    dispatch(fetchCollectionFailed(error));
  }
};
