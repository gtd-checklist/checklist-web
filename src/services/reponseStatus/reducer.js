import { UNAUTHORIZED } from './actions';

export default function (state = {}, action) {
  switch (action.type) {
    case UNAUTHORIZED:
      return { ...state, responseStatus: 401 };
    default:
      return state;
  }
}
