import { RegistrationContainer } from './containers/RegistrationContainer';
import MainPageContainer from './containers/MainPageContainer';
import SigninContainer from './containers/SigninContainer';

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
    path: '/signin',
    component: SigninContainer,
    exact: true
  }
];
