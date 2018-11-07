import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { configureStore } from './createStore';
import { GlobalStyle } from './globalStyle';

import ProtectedRoute from './containers/ProtectedRoute';
import routes from './routes';
import { Logo } from './components/Logo';

const store = configureStore();

export const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <Logo />
        <Switch>
          { routes.map((route, index) => <ProtectedRoute key={index} {...route} />) }
        </Switch>
      </Fragment>
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
