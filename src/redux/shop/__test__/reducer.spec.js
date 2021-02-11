import { INITIAL_STATE, shopReducer } from 'src/redux/shop/reducer';
import {
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_ERROR,
} from 'src/redux/shop/types';

describe('Shop Reducer', () => {
  let initState;
  beforeEach(() => {
    initState = { ...INITIAL_STATE };
  });

  it('Should return default state', () => {
    const newState = shopReducer(initState, {});
    expect(newState).toEqual(initState);
  });

  it('Should return start fetching', () => {
    const newState = shopReducer(initState, {
      type: FETCH_COLLECTION_START,
      payload: { ...initState, isFetching: true },
    });
    expect(newState).toEqual({ ...initState, isFetching: true });
  });

  it('Should return error', () => {
    const newState = shopReducer(initState, {
      type: FETCH_COLLECTION_ERROR,
      payload: { ...initState, isFetching: false, errorMessage: 'Hes error' },
    });
    expect(newState).toEqual(newState);
  });
  it('Should return new state if receiving type', () => {
    const offers = [{ title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' }];
    const newState = shopReducer(initState, {
      type: FETCH_COLLECTION_SUCCESS,
      payload: {
        ...initState,
        collections: offers,
        errorMessage: null,
        isFetching: false,
      },
    });
    expect(newState).toEqual(newState);
  });
});
