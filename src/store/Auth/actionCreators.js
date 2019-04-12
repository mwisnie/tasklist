import * as uiActions from '../UI/actionCreators';
import { apiKey, authAxios } from './../../axios-instance';
import * as authActionTypes from './actionTypes';

export const signup = credentials => {
  return dispatch => {
    dispatch(uiActions.startLoading());
    const fullCredentials = {
      ...credentials,
      returnSecureToken: true
    };

    authAxios.post(`signupNewUser?key=${apiKey}`, fullCredentials)
      .then(response => {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
        localStorage.setItem('tasklistAppToken', response.data.idToken);
        localStorage.setItem('tasklistAppEmail', response.data.email);
        localStorage.setItem('tasklistAppExpirationDate', expirationDate);

        dispatch(signupSuccess({
          token: response.data.idToken,
          email: response.data.email
        }));
        dispatch(logoutAfterTimeout(response.data.expiresIn * 1000));
      })
      .catch(error => {
        console.log('Error during signup.');
        dispatch(signupFailure(error));
      })
      .then(() => {
        dispatch(uiActions.stopLoading());
      });
  };
};

export const login = credentials => {
  return dispatch => {
    dispatch(uiActions.startLoading());
    const fullCredentials = {
      ...credentials,
      returnSecureToken: true
    };

    authAxios.post(`verifyPassword?key=${apiKey}`, fullCredentials)
      .then(response => {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
        localStorage.setItem('tasklistAppToken', response.data.idToken);
        localStorage.setItem('tasklistAppEmail', response.data.email);
        localStorage.setItem('tasklistAppExpirationDate', expirationDate);

        dispatch(loginSuccess({
          token: response.data.idToken,
          email: response.data.email
        }));
        dispatch(logoutAfterTimeout(response.data.expiresIn * 1000));
      })
      .catch(error => {
        console.log('Error during login.');
        dispatch(loginFailure(error));
      })
      .then(() => {
        dispatch(uiActions.stopLoading());
      });
  };
};

export const signupSuccess = signupData => {
  return {
    type: authActionTypes.SIGNUP_SUCCESS,
    payload: signupData
  };
};

export const signupFailure = error => {
  return {
    type: authActionTypes.SIGNUP_FAILURE,
    error: error
  };
};

export const loginSuccess = loginData => {
  return {
    type: authActionTypes.LOGIN_SUCCESS,
    payload: loginData
  };
};

export const loginFailure = error => {
  return {
    type: authActionTypes.LOGIN_FAILURE,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('tasklistAppToken');
  localStorage.removeItem('tasklistAppEmail');
  localStorage.removeItem('tasklistAppExpirationDate');
  return {
    type: authActionTypes.LOGOUT
  };
};

export const logoutAfterTimeout = timeout => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, timeout);
  };
};