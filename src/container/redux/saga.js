import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_WEB_DATA, FETCH_WEB_DATA_FAILED, FETCH_WEB_DATA_SUCCESS} from './actions';
import {get} from './api';

function* getData() {
  const url = `http://www.mocky.io/v2/5d565297300000680030a986`;
  try {
    const response = yield call(get, url);
    if (response.length > 0) {
      yield put({
        type: FETCH_WEB_DATA_SUCCESS,
        response,
      });
    } else {
      yield put({type: FETCH_WEB_DATA_FAILED});
    }
  } catch (error) {
    console.log('error saga', error);
    yield put({type: FETCH_WEB_DATA_FAILED});
  }
}

export function* get_data() {
  yield takeLatest(FETCH_WEB_DATA, getData);
}
