import {
  SHOW_REVIEW_LIST_HABITS,
  ADD_REVIEW_HABITS
} from './actions';

export default function (state = {}, action) {
  console.log('dispatch ', state, action);
  switch (action.type) {
    case SHOW_REVIEW_LIST_HABITS:
      return action.reviewList;
    case ADD_REVIEW_HABITS:
      return [...state, action.payload];
    default:
      return state;
  }
}
