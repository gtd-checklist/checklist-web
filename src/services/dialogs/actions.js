export const DIALOGADDHABITOPEN = 'DIALOGADDHABITOPEN';
export const DIALOGADDHABITCLOSE = 'DIALOGADDHABITCLOSE';
export const DIALOGREVIEWHABITOPEN = 'DIALOGREVIEWHABITOPEN';
export const DIALOGREVIEWHABITCLOSE = 'DIALOGREVIEWHABITCLOSE';

export const dialogAddHabitOpenAction = () => (dispatch) => {
  dispatch({ type: DIALOGADDHABITOPEN });
};

export const dialogAddHabitCloseAction = () => (dispatch) => {
  dispatch({ type: DIALOGADDHABITCLOSE });
};

export const dialogReviewHabitOpenAction = () => (dispatch) => {
  dispatch({ type: DIALOGREVIEWHABITOPEN });
};

export const dialogReviewHabitCloseAction = () => (dispatch) => {
  dispatch({ type: DIALOGREVIEWHABITCLOSE });
};
