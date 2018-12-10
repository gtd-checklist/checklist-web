import {
  POST_NEW_HABIT_SUCCESS,
  POST_NEW_HABIT_WAITING,
  POST_NEW_HABIT_FAILURE,
  FETCH_HABITS_SUCCESS,
  FETCH_HABITS_WAITING,
  FETCH_HABITS_FAILURE
} from './actions';

const initState = {
  habits: [],
  waiting: false,
  error: null
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_HABITS_SUCCESS:
      return Object.assign({}, state, {
        waiting: false,
        habits: state.habits.concat(action.payload)
      });
    case POST_NEW_HABIT_SUCCESS:
      return Object.assign({}, state, {
        waiting: false,
        habits: [...state.habits, action.payload]
      });
    case FETCH_HABITS_WAITING:
    case POST_NEW_HABIT_WAITING:
      return Object.assign({}, state, { waiting: true });
    case FETCH_HABITS_FAILURE:
    case POST_NEW_HABIT_FAILURE:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}
