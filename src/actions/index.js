import actionTypes from './ActionTypes';
export default {
  login:(data)=>({ type: actionTypes.SAGA_USER_LOGIN, data}),
  setCurrentUser: (data) => ({type: actionTypes.USER_SET_CURRENT_USER_DATA, data})
}