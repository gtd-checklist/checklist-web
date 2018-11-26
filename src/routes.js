import AuthorizationContainer from './containers/AuthorizationContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import HomeContainer from './containers/HomeContainer';
import HabitsContainer from './containers/HabitsContainer';
import AddHabitContainer from './containers/AddHabitContainer';

const ROUTE_PATHS = {
  root: '/',
  auth: '/auth',
  registration: '/registration',
  newHabit: '/newhabit',
  review: '/review',
  habits: '/habits'
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
    name: 'Главная',
    component: HomeContainer,
    exact: true
  },
  {
    path: ROUTE_PATHS.newHabit,
    name: 'Добавить цель',
    component: AddHabitContainer,
    exact: true
  },
  {
    path: ROUTE_PATHS.review,
    name: 'Ревью достижения целей',
    component: null,
    exact: true
  },
  {
    path: ROUTE_PATHS.habits,
    name: 'Цели',
    component: HabitsContainer,
    exact: true
  }
];

export { ROUTE_PATHS, routes };
