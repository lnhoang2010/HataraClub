import Actions from '../actions';
import ActionTypes from '../actions/ActionTypes';
import {call, put, takeEvery, fork} from 'redux-saga/effects';
import User from '../models/User';

function* login(action){
  console.log(1, "data")
  const {params, onSucces, onFail} = action;
  let data = {
    "Email": "2@gmail.com", 
    "Password": "c4ca4238a0b923820dcc509a6f75849b",
  }

  try {
    const response = yield call(User.login, data);
    if(response){
      // yield put(Actions.setCurrentUser(response.data[0]))
      yield put(Actions.setCurrentUser(response))
    }
    console.log(response.data[0])
    
  } catch (error) {
    console.log("SagaUserError",error)
  }
}

export default function* sagaUser(){
  yield takeEvery(ActionTypes.SAGA_USER_LOGIN, login);
}

