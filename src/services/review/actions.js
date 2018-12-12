import { fetchHabitsReview, postHabitsReview } from '../api';

export const FETCH_HABITS_REVIEW_SUCCESS = 'FETCH_HABITS_REVIEW_SUCCESS';
export const FETCH_HABITS_REVIEW_WAITING = 'FETCH_HABITS_REVIEW_WAITING';
export const FETCH_HABITS_REVIEW_FAILURE = 'FETCH_HABITS_REVIEW_FAILURE';

export const POST_NEW_HABITS_REVIEW_SUCCESS = 'POST_NEW_HABITS_REVIEW_SUCCESS';
export const POST_NEW_HABITS_REVIEW_WAITING = 'POST_NEW_HABITS_REVIEW_WAITING';
export const POST_NEW_HABITS_REVIEW_FAILURE = 'POST_NEW_HABITS_REVIEW_FAILURE';

export const addReviewHabitAction = values => async (dispatch) => {
  dispatch({ type: POST_NEW_HABITS_REVIEW_WAITING });

  try {
    const response = await postHabitsReview(values);
    dispatch({
      type: POST_NEW_HABITS_REVIEW_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    dispatch({
      type: POST_NEW_HABITS_REVIEW_FAILURE,
      payload: e.message
    });
  }
};

export const fetchHabitsReviewAction = () => async (dispatch) => {
  dispatch({ type: FETCH_HABITS_REVIEW_WAITING });
  try {
    const response = await fetchHabitsReview();
    dispatch({
      type: FETCH_HABITS_REVIEW_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    dispatch({
      type: FETCH_HABITS_REVIEW_FAILURE,
      payload: e.message
    });
  }
};
