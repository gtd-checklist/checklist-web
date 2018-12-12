import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';
import dialogs from './dialogs/reducer';
import journal from './journal/reducer';
import review from './review/reducer';
import habits from './habits/reducer';

export const rootReducer = combineReducers({
  auth,
  routing: routerReducer,
  dialogs,
  habits,
  journal,
  review
});
