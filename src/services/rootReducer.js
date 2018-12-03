import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';
import dialogs from './dialogs/reducer';
import responseStatus from './reponseStatus/reducer';
import list from './list/reducer';
import reviewList from './review/reducer';

export const rootReducer = combineReducers({
  auth,
  routing: routerReducer,
  dialogs,
  responseStatus,
  list,
  reviewList
});
