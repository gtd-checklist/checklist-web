import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import { configureStore } from './createStore';

import themeLight from './ui/Themes';
import { GlobalStyle } from './globalStyled';

import { Logo } from './components/Logo';
// import { AuthorizationContainer } from './containers/AuthorizationContainer';
import { RegistrationContainer } from './containers/RegistrationContainer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={themeLight}>
      <Fragment>
        <GlobalStyle />
        <Logo />
        <RegistrationContainer />
      </Fragment>
    </ThemeProvider>
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
