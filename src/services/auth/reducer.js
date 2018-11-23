import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  REGISTRATION_ERROR
} from './actions';

export default function (state = {}, action) {
  console.log('dispatch ', state, action);

  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
    case REGISTRATION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
