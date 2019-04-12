import * as actionTypes from './actionTypes';

export const sideDrawerToggle = () => {
  return {
    type: actionTypes.SIDE_DRAWER_TOGGLE
  };
};

export const startLoading = () => {
  return {
    type: actionTypes.START_LOADING
  };
};

export const stopLoading = () => {
  return {
    type: actionTypes.STOP_LOADING
  };
};

