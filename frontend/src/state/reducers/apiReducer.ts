// reducers.ts
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from '../action-types/apiActionTypes';
  
  interface State {
    data: any;
    loading: boolean;
    error: any;
  }
  
  const initialState: State = {
    data: null,
    loading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_DATA_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case FETCH_DATA_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  