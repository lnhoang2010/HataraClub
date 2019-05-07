import actionTypes from '../actions/ActionTypes';

const initState = {
  userData: []
}

export const UserReducer = (state = initState, action) => {
  let newUserData = [...state.userData]
  switch (action.type) {
    case actionTypes.SIGN_UP:
      let newUser = {username: action.username, password: action.password}
      newUserData.push(newUser)
      return Object.assign({}, state, {userData: newUserData})

    case actionTypes.DELETE_USER:
      for(let i = 0; i < newUserData.length; i++){
        if(newUserData[i].username == action.username){
          newUserData.splice(i, 1);
        }
      }
      return Object.assign({}, state, {userData: newUserData});
    
    case actionTypes.LOAD_DATA:
      newUserData = action.data;
      return Object.assign({}, state, {userData: newUserData});
      
    case actionTypes.USER_SET_CURRENT_USER_DATA:
      return Object.assign({}, state, { profile: { ...data } })

    case actionTypes.CHANGE_PASSWORD:
      for(let i = 0; i < newUserData.length; i++){
        if(newUserData[i].username == action.username){
          newUserData[i].password = action.password
        }
      }
      return Object.assign({}, state, {userData: newUserData})
    
    default:
      return state
  }
}

export default UserReducer;