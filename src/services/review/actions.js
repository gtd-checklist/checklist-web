import axios from 'axios';

export const SHOW_REVIEW_LIST_HABITS = 'SHOW_REVIEW_LIST_HABITS';
export const ADD_REVIEW_HABITS = 'ADD_REVIEW_HABITS';

const apiUrl = 'https://checklist.now.sh/api/v1/review';

export const showReviewList = reviewList => ({
  type: SHOW_REVIEW_LIST_HABITS,
  reviewList
});

export const addReviewHabitsSuccess = data => ({
  type: ADD_REVIEW_HABITS,
  payload: {
    date: data.date,
    habitsResolution: data.habitsResolution
  }
});

export const showReviewListHabitsAction = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    dispatch(showReviewList(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const addReviewHabitsAction = ({ date, habitsResolution }) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl, { date, habitsResolution });
    dispatch(addReviewHabitsSuccess(response.data));
  } catch (error) {
    console.error(error);
  }
};
