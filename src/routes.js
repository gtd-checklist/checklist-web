import AuthorizationContainer from './containers/AuthorizationContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import HomeContainer from './containers/HomeContainer';
import HabitsContainer from './containers/HabitsContainer';
import AddHabitContainer from './containers/AddHabitContainer';
import ReviewContainer from './containers/ReviewContainer';
import { Page404 } from './components/Page404';

const ROUTE_PATHS = {
  root: '/',
  auth: '/auth',
  registration: '/registration',
  newHabit: '/newhabit',
  review: '/review',
  habits: '/habits',
  page404: '/404'
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
    component: ReviewContainer,
    exact: true
  },
  {
    path: ROUTE_PATHS.habits,
    name: 'Цели',
    component: HabitsContainer,
    exact: true
  },
  {
    path: ROUTE_PATHS.page404,
    name: 'Страница потеряна',
    component: Page404,
    exact: true
  }
];

export { ROUTE_PATHS, routes };
