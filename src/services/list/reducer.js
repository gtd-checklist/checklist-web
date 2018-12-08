import {
  SHOW_LIST_HABITS
} from './actions';

export default function (state = [], action) {
  console.log('dispatch ', state, action);
  switch (action.type) {
    case SHOW_LIST_HABITS:
      return action.list;
    default:
      return state;
  }
}
