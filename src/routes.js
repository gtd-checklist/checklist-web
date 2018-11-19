import AuthorizationContainer from './containers/AuthorizationContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import HomeContainer from './containers/HomeContainer';

const ROUTE_PATHS = {
  root: '/',
  auth: '/auth',
  registration: '/registration'
};

const routes = [
  {
    path: ROUTE_PATHS.auth,
    component: AuthorizationContainer,
    exact: true
  },
  {
    path: ROUTE_PATHS.registration,
    component: RegistrationContainer,
    exact: true
  },
  {
    path: ROUTE_PATHS.root,
    component: HomeContainer,
    exact: true
  }
];

export { ROUTE_PATHS, routes };
