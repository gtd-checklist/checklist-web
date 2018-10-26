import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { GlobalStyle } from './styled';

import { Logo } from './components/Logo';
import { UserRegisterContainer } from './containers/UserRegisterContainer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Logo />
      <UserRegisterContainer />
    </Fragment>
  </Provider>
);

export default App;
