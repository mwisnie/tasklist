import { updateState } from './../utility';
import * as actionTypes from './actionTypes';

const initialState = {
  token: null,
  email: null,
  error: null
};

// todo: probably remove duplications
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESS:
      return updateState(state, { token: action.payload.token, email: action.payload.email });
    case actionTypes.SIGNUP_FAILURE:
      return updateState(state, { token: null, email: null });
    case actionTypes.LOGIN_SUCCESS:
      return updateState(state, { token: action.payload.token, email: action.payload.email });
    case actionTypes.LOGIN_FAILURE:
      return updateState(state, { token: null, email: null });
    case actionTypes.LOGOUT:
      return updateState(state, { token: null, email: null });
    default:
      return state;
  }
}

export default authReducer;