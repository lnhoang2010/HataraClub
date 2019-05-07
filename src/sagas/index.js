import { fork } from 'redux-saga/effects';
import sagaUser from './User';
import sagaNews from './news';

export default function* rootSaga() {
  yield fork(sagaUser),
  yield fork(sagaNews)
}