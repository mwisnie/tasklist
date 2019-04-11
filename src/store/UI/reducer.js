import * as actionTypes from './actions';
import { updateState } from './../utility';

const initialState = {
  sideDrawerOpen: false
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIDE_DRAWER_TOGGLE:
      return updateState(state, {sideDrawerOpen: !state.sideDrawerOpen});
    default:
      return state;
  };
};

export default uiReducer;