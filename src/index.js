import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { configureStore } from './createStore';
import { GlobalStyle } from './globalStyle';

import { Logo } from './components/Logo';
import { RegistrationContainer } from './containers/RegistrationContainer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Logo />
      <RegistrationContainer />
    </Fragment>
  </Provider>
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./', () => { render(App); });
}
