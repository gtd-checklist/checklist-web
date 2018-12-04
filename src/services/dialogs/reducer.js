import {
  DIALOG_ADDHABIT_OPEN,
  DIALOG_REVIEWHABIT_OPEN,
  DIALOG_CLOSE
} from './actions';

const initialState = {
  openDialog: ''
};

export default function (state = initialState, action) {
  console.log('dispatch ', state, action);
  switch (action.type) {
    case DIALOG_ADDHABIT_OPEN:
      return { openDialog: 'addHabit' };
    case DIALOG_REVIEWHABIT_OPEN:
      return { openDialog: 'reviewHabit' };
    case DIALOG_CLOSE:
      return { openDialog: '' };
    default:
      return state;
  }
}
