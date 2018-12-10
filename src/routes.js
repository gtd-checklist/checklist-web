import AuthorizationContainer from './containers/AuthorizationContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import HomeContainer from './containers/HomeContainer';
import JournalContainer from './containers/JournalContainer';
import Stub from './containers/Stub';
import { Page404 } from './components/Page404';

const ROUTE_PATHS = {
  root: '/',
  auth: '/auth',
  registration: '/registration',
  journal: '/journal',
  calendar: '/calendar',
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
    path: ROUTE_PATHS.journal,
    name: 'Список целей',
    component: JournalContainer,
    exact: true
  },
  {
    path: ROUTE_PATHS.calendar,
    name: 'Календарь',
    component: Stub,
    exact: true
  },
  {
    path: ROUTE_PATHS.profile,
    name: 'Профиль',
    component: Stub,
    exact: true
  },
  {
    path: ROUTE_PATHS.report,
    name: 'Отчет',
    component: Stub,
    exact: true
  },
  {
    path: ROUTE_PATHS.page404,
    component: Page404
  }
];

export { ROUTE_PATHS, routes };
