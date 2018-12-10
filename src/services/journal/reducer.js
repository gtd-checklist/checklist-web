import { FETCH_JOURNAL_SUCCESS, FETCH_JOURNAL_WAITING, FETCH_JOURNAL_FAILURE } from './actions';

const initState = {
  journal: {},
  waiting: false,
  error: null
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_JOURNAL_SUCCESS:
      return Object.assign({}, state, { waiting: false, journal: action.payload });
    case FETCH_JOURNAL_WAITING:
      return Object.assign({}, state, { waiting: true });
    case FETCH_JOURNAL_FAILURE:
      return Object.assign({}, state, { waiting: false, error: action.payload });
    default:
      return state;
  }
}
