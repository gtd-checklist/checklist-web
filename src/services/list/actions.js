import axios from 'axios';

export const SHOW_LIST_HABITS = 'SHOW_LIST_HABITS';

const apiUrl = 'https://checklist.now.sh/api/v1/journal/:month';

export const showList = list => (
  {
    type: SHOW_LIST_HABITS,
    list
  }
);

export const showListHabitsAction = () => async (dispatch) => {
  await axios.get(apiUrl)
    .then(response => dispatch(showList(response.data)))
    .catch(error => console.error(error));
};
