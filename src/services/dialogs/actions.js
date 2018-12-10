export const DIALOG_ADDHABIT_OPEN = 'DIALOG_ADDHABIT_OPEN';
export const DIALOG_REVIEWHABIT_OPEN = 'DIALOG_REVIEWHABIT_OPEN';
export const DIALOG_CLOSE = 'DIALOG_REVIEWHABIT_CLOSE';

export const dialogAddHabitOpenAction = () => (dispatch) => {
  dispatch({ type: DIALOG_ADDHABIT_OPEN });
};

export const dialogReviewHabitOpenAction = () => (dispatch) => {
  dispatch({ type: DIALOG_REVIEWHABIT_OPEN });
};

export const dialogCloseAction = () => (dispatch) => {
  dispatch({ type: DIALOG_CLOSE });
};
