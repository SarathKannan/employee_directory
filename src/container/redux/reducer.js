import {
  FETCH_WEB_DATA,
  FETCH_WEB_DATA_FAILED,
  FETCH_WEB_DATA_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  dataList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WEB_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_WEB_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataList : action.response
      };
    case FETCH_WEB_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
}
