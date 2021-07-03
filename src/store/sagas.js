import {all, fork} from 'redux-saga/effects';
import * as Home from '../container/redux/saga';

export default function* mySaga() {
  yield all([...Object.values(Home)].map(fork));
}
