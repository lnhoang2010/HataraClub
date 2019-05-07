import actionTypes from './ActionTypes';
export default {
  login:(username, password)=>({ type: actionTypes.SIGN_IN, username, password}),
  setCurrentUser: (data) => ({type: actionTypes.USER_SET_CURRENT_USER_DATA, data}),
  signUp: (username, password) => ({type: actionTypes.SIGN_UP, username, password}),
  delete: (username) => ({type: actionTypes.DELETE_USER, username}),
  load: (data) => ({type: actionTypes.LOAD_DATA, data}),
  changePassword: (username, password) => ({type: actionTypes.CHANGE_PASSWORD, username, password}),
  loadNews: () => ({type: actionTypes.LOAD_NEWS}),
  renderNews: (data) => ({type: actionTypes.RENDER_NEWS, data})
}