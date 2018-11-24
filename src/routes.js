import { RegistrationContainer } from './containers/RegistrationContainer';
import { HomeContainer } from './containers/HomeContainer';
import { AuthorizationContainer } from './containers/AuthorizationContainer';
import { AddHabitContainer } from './containers/AddHabitContainer';

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
    path: '/auth1',
    component: AuthorizationContainer,
    exact: true
  },
  {
    path: '/auth',
    component: AddHabitContainer,
    exact: true
  }
];
