import {
  DIALOGOPEN,
  DIALOGCLOSE
} from './actions';

const initialState = {
  openState: true
};

export default function (state = initialState, action) {
  console.log('dispatch ', state, action);
  switch (action.type) {
    case DIALOGOPEN:
      return { openState: false };
    case DIALOGCLOSE:
      return { openState: true };
    default:
      return state;
  }
}
