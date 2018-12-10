import {
  DIALOG_ADDHABIT_OPEN,
  DIALOG_REVIEWHABIT_OPEN,
  DIALOG_CLOSE,
  POST_NEW_HABIT_SUCCESS,
  POST_NEW_HABIT_WAITING,
  POST_NEW_HABIT_FAILURE
} from './actions';

const initState = {
  openDialog: '',
  waiting: false,
  error: null
};

function addHabitReducer(state = initState, action) {
  switch (action.type) {
    case POST_NEW_HABIT_SUCCESS:
      return Object.assign({}, state, { openDialog: '', waiting: false });
    case POST_NEW_HABIT_WAITING:
      return Object.assign({}, state, { waiting: true });
    case POST_NEW_HABIT_FAILURE:
      return Object.assign({}, state, { openDialog: '', error: action.payload });
    default:
      return state;
  }
}

export default function (state = initState, action) {
  switch (action.type) {
    case DIALOG_ADDHABIT_OPEN:
      return { openDialog: 'addHabit' };
    case DIALOG_REVIEWHABIT_OPEN:
      return { openDialog: 'reviewHabit' };
    case DIALOG_CLOSE:
      return { openDialog: '' };
    default:
      return addHabitReducer(state, action);
  }
}
