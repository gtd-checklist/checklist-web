import {
  POST_NEW_HABITS_REVIEW_SUCCESS,
  POST_NEW_HABITS_REVIEW_WAITING,
  POST_NEW_HABITS_REVIEW_FAILURE,
  FETCH_HABITS_REVIEW_SUCCESS,
  FETCH_HABITS_REVIEW_WAITING,
  FETCH_HABITS_REVIEW_FAILURE
} from './actions';

const initState = {
  review: [],
  waiting: false,
  error: null
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_HABITS_REVIEW_SUCCESS:
      return Object.assign({}, state, {
        waiting: false,
        review: action.payload
      });
    case POST_NEW_HABITS_REVIEW_SUCCESS:
      return Object.assign({}, state, {
        waiting: false,
        review: [...state.review, action.payload]
      });
    case FETCH_HABITS_REVIEW_WAITING:
    case POST_NEW_HABITS_REVIEW_WAITING:
      return Object.assign({}, state, { waiting: true });
    case FETCH_HABITS_REVIEW_FAILURE:
    case POST_NEW_HABITS_REVIEW_FAILURE:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}
