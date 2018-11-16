import { RegistrationContainer } from './containers/RegistrationContainer';
import { HomeContainer } from './containers/HomeContainer';
import { AuthorizationContainer } from './containers/AuthorizationContainer';

export default [
  {
    path: '/auth',
    component: HomeContainer,
    exact: true
  },
  {
    path: '/registration',
    component: RegistrationContainer,
    exact: true
  },
  {
    path: '/',
    component: AuthorizationContainer,
    exact: true
  }
];
