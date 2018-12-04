import AuthorizationContainer from './containers/AuthorizationContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import HomeContainer from './containers/HomeContainer';
import { Page404 } from './components/Page404';
import { Temp } from './components/Temp';

const ROUTE_PATHS = {
  root: '/',
  auth: '/auth',
  registration: '/registration',
  list: '/list',
  calend: '/calendar',
  profile: '/profile',
  report: '/report',
  page404: '*'
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
    path: ROUTE_PATHS.list,
    name: 'Список целей',
    component: Temp,
    exact: true
  },
  {
    path: ROUTE_PATHS.calend,
    name: 'Календарь',
    component: Temp,
    exact: true
  },
  {
    path: ROUTE_PATHS.profile,
    name: 'Профиль',
    component: Temp,
    exact: true
  },
  {
    path: ROUTE_PATHS.report,
    name: 'Отчет',
    component: Temp,
    exact: true
  },
  {
    path: ROUTE_PATHS.page404,
    component: Page404,
    exact: true
  }
];

export { ROUTE_PATHS, routes };
