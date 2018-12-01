export const DIALOGOPEN = 'DIALOGOPEN';
export const DIALOGCLOSE = 'DIALOGCLOSE';

export const dialogOpenAction = () => (dispatch) => {
  dispatch({ type: DIALOGOPEN });
};

export const dialogCloseAction = () => (dispatch) => {
  dispatch({ type: DIALOGCLOSE });
};
