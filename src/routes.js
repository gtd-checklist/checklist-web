import { RegistrationContainer } from './containers/RegistrationContainer';
import MainPageContainer from './containers/MainPageContainer';
import LoginContainer from './containers/LoginContainer';

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
    path: '/login',
    component: LoginContainer,
    exact: true
  }
];
