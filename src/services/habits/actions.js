import { fetchHabits, postNewHabit } from '../api';

export const POST_NEW_HABIT_SUCCESS = 'POST_NEW_HABIT_SUCCESS';
export const POST_NEW_HABIT_WAITING = 'POST_NEW_HABIT_WAITING';
export const POST_NEW_HABIT_FAILURE = 'POST_NEW_HABIT_FAILURE';

export const FETCH_HABITS_SUCCESS = 'FETCH_HABITS_SUCCESS';
export const FETCH_HABITS_WAITING = 'FETCH_HABITS_WAITING';
export const FETCH_HABITS_FAILURE = 'FETCH_HABITS_FAILURE';

export const addNewHabitAction = values => async (dispatch) => {
  dispatch({ type: POST_NEW_HABIT_WAITING });

  console.log(values);

  try {
    const response = await postNewHabit(values);
    dispatch({
      type: POST_NEW_HABIT_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    dispatch({
      type: POST_NEW_HABIT_FAILURE,
      payload: e.message
    });
  }
};

export const fetchHabitsAction = () => async (dispatch) => {
  dispatch({ type: FETCH_HABITS_WAITING });

  try {
    const response = await fetchHabits();
    dispatch({
      type: FETCH_HABITS_SUCCESS,
      payload: response.data.habits
    });
  } catch (e) {
    dispatch({
      type: FETCH_HABITS_FAILURE,
      payload: e.message
    });
  }
};
