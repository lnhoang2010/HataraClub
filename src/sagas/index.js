import { fork } from 'redux-saga/effects';
import sagaUser from './User';
export default function* rootSaga() {
  yield fork(sagaUser)
}