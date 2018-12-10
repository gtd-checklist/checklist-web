import { fetchJournal } from '../api';

export const FETCH_JOURNAL_SUCCESS = 'FETCH_JOURNAL_SUCCESS';
export const FETCH_JOURNAL_WAITING = 'FETCH_JOURNAL_WAITING';
export const FETCH_JOURNAL_FAILURE = 'FETCH_JOURNAL_FAILURE';

export const fetchJournalAction = month => async (dispatch) => {
  dispatch({ type: FETCH_JOURNAL_WAITING });
  try {
    const response = await fetchJournal(month);
    dispatch({ type: FETCH_JOURNAL_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: FETCH_JOURNAL_FAILURE, payload: e.message });
  }
};
