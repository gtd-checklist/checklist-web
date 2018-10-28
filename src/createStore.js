import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

import { rootReducer } from './services/rootReducer';

export const history = createHistory();

export function configureStore() {
  let composeEnhancers;

  if (process.env.NODE_ENV !== 'production') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line
  } else {
    composeEnhancers = compose;
  }

  const enhancers = composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)));

  const store = createStore(rootReducer, enhancers);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
}
