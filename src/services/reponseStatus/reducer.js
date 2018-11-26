import { initState } from '../initState';
import { UNAUTHORIZED } from './actions';

export default function (state = initState, action) {
  switch (action.type) {
    case UNAUTHORIZED:
      return { ...state, responseStatus: 401 };
    default:
      return state;
  }
}
