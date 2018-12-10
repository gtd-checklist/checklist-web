import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';
import dialogs from './dialogs/reducer';
import journal from './journal/reducer';
import reviewList from './review/reducer';

export const rootReducer = combineReducers({
  auth,
  routing: routerReducer,
  dialogs,
  journal,
  reviewList
});
