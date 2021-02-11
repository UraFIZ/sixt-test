import axios from 'axios';
import _ from 'lodash';

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

export const fetchCollection = () => async (dispatch) => {
  dispatch(fetchCollectionStart());

  try {
    const {
      data: { offers },
    } = await axios.get('http://cdn.sixt.io/codingtask/offers.json');
    // use to boost performance while CRUD
    const normalizedData = _.keyBy(offers, 'id');
    setTimeout(() => {
      dispatch(fetchCollectionSuccess(normalizedData));
    }, 2000);
  } catch (error) {
    dispatch(fetchCollectionFailed(error));
  }
};
