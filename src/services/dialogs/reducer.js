import {
  DIALOGADDHABITOPEN,
  DIALOGADDHABITCLOSE,
  DIALOGREVIEWHABITOPEN,
  DIALOGREVIEWHABITCLOSE
} from './actions';

const initialState = {
  isOpenAddHabitDialog: false,
  isOpenReviewHabitDialog: false
};

export default function (state = initialState, action) {
  console.log('dispatch ', state, action);
  switch (action.type) {
    case DIALOGADDHABITOPEN:
      return {
        isOpenAddHabitDialog: true,
        isOpenReviewHabitDialog: false
      };
    case DIALOGADDHABITCLOSE:
      return initialState;
    case DIALOGREVIEWHABITOPEN:
      return {
        isOpenReviewHabitDialog: true,
        isOpenAddHabitDialog: false
      };
    case DIALOGREVIEWHABITCLOSE:
      return initialState;
    default:
      return state;
  }
}
