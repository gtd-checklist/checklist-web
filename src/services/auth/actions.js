import { getAuthToken, register } from '../api';

export const AUTHENTICATED = 'AUTHENTICATED';
export const UNAUTHENTICATED = 'UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';

export const REGISTERED = 'REGISTERED';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export const signInAction = (email, pass) => async (dispatch) => {
  console.log('signin', email, pass);

  try {
    const token = await getAuthToken(email, pass);
    dispatch({ type: AUTHENTICATED });
    localStorage.setItem('auth', token);
  } catch (error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: 'Invalid email or password'
    });
  }
};

export const registerAction = (username, email, pass) => async (dispatch) => {
  try {
    const error = await register(username, email, pass);
    dispatch(error ? { type: REGISTRATION_ERROR, payload: error } : { type: REGISTERED });
  } catch (error) {
    dispatch({ type: REGISTRATION_ERROR, payload: error });
  }
};
