import { UNAUTHORIZED } from './actions';

const initState = {
  responseStatus: 0
};

export default function (state = initState, action) {
  switch (action.type) {
    case UNAUTHORIZED:
      return { ...state, responseStatus: 401 };
    default:
      return state;
  }
}
