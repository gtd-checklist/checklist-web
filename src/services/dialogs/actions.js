import { postNewHabit } from '../api';

export const DIALOG_ADDHABIT_OPEN = 'DIALOG_ADDHABIT_OPEN';
export const DIALOG_REVIEWHABIT_OPEN = 'DIALOG_REVIEWHABIT_OPEN';
export const DIALOG_CLOSE = 'DIALOG_REVIEWHABIT_CLOSE';
export const POST_NEW_HABIT_SUCCESS = 'POST_NEW_HABIT_SUCCESS';
export const POST_NEW_HABIT_WAITING = 'POST_NEW_HABIT_WAITING';
export const POST_NEW_HABIT_FAILURE = 'POST_NEW_HABIT_FAILURE';

export const dialogAddHabitOpenAction = () => (dispatch) => {
  dispatch({ type: DIALOG_ADDHABIT_OPEN });
};

export const dialogReviewHabitOpenAction = () => (dispatch) => {
  dispatch({ type: DIALOG_REVIEWHABIT_OPEN });
};

export const dialogCloseAction = () => (dispatch) => {
  dispatch({ type: DIALOG_CLOSE });
};

export const addNewHabitAction = values => async (dispatch) => {
  dispatch({ type: POST_NEW_HABIT_WAITING });

  try {
    const habit = await postNewHabit(values);
    dispatch({
      type: POST_NEW_HABIT_SUCCESS,
      payload: habit
    });
  } catch (e) {
    dispatch({
      type: POST_NEW_HABIT_FAILURE,
      payload: e.message
    });
  }
};
