import axios from 'axios';

export const SHOW_LIST_HABITS = 'SHOW_LIST_HABITS';

const apiUrl = 'https://checklist.now.sh/api/v1/journal/';

export const showList = list => (
  {
    type: SHOW_LIST_HABITS,
    list
  }
);

export const showListHabitsAction = month => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}:${month}`);
    dispatch(showList(response.data));
  } catch (error) {
    console.error(error);
  }
};
