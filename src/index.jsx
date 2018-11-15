import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { configureStore } from './createStore';
import { theme } from './ui/Themes';
import { GlobalStyle } from './globalStyled';

import ProtectedRoute from './containers/ProtectedRoute';
import routes from './routes';

export const store = configureStore();

export const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <CssBaseline />
          <GlobalStyle />
          <Switch>
            { routes.map((route, index) => <ProtectedRoute key={index} {...route} />) }
          </Switch>
        </Fragment>
      </MuiThemeProvider>
    </Provider>
  </Router>
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
