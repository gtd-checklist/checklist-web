import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';
import dialogs from './dialogs/reducer';
import responseStatus from './reponseStatus/reducer';

export const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  dialogs,
  responseStatus
});
