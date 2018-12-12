import React from 'react';

import { InfoPage } from '../../ui/InfoPage';
import back from '../../img/back-404.jpg';

const Page404 = () => <InfoPage backImg={back} bgColor="primary" headerText="Ooops..." mainText="Мы не можем найти страницу, которую Вы ищите" />;

export { Page404 };
