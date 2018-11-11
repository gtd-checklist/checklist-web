import { getAuthToken } from '../api';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export function signInAction({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await getAuthToken(email, password);
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('auth', token);
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
}
