import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';

import { GlobalStyle } from './styled';
import { AuthorizationContainer } from './containers/AuthorizationContainer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <AuthorizationContainer />
    </Fragment>
  </Provider>
);

export default App;
