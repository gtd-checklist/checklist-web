import { RegistrationContainer } from './containers/RegistrationContainer';
import MainPageContainer from './containers/MainPageContainer';
import { AuthorizationContainer } from './containers/AuthorizationContainer';

export default [
  {
    path: '/',
    component: MainPageContainer,
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
