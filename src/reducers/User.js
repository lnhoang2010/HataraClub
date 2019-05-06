import actionTypes from '../actions/ActionTypes';

const initState = {
  userData: null,
  profile: {},
}

export const UserReducer = (state = initState, action) => {
  const { type, data } = action
  switch (type) {
    case actionTypes.USER_SET_CURRENT_USER_DATA:
      return Object.assign({}, state, { profile: { ...data } })
    default:
      return state
  }
}

export default UserReducer;