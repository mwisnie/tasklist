import * as actionTypes from './actionTypes';
import { updateState } from './../utility';

const initialState = {
  sideDrawerOpen: false,
  isLoading: false
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIDE_DRAWER_TOGGLE:
      return updateState(state, {sideDrawerOpen: !state.sideDrawerOpen});
    case actionTypes.START_LOADING:
      console.log('start loading');
      return updateState(state, {isLoading: true});
    case actionTypes.STOP_LOADING:
      console.log('stop loading')
      return updateState(state, {isLoading: false});
    default:
      return state;
  };
};

export default uiReducer;