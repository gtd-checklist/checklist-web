import { RegistrationContainer } from './containers/RegistrationContainer';
import { HomeContainer } from './containers/HomeContainer';
import { AuthorizationContainer } from './containers/AuthorizationContainer';

export default [
  {
    path: '/',
    component: HomeContainer,
    exact: true
  },
  {
    path: '/registration',
    component: RegistrationContainer,
    exact: true
  },
  {
    path: '/auth',
    component: AuthorizationContainer,
    exact: true
  }
];
