import React from 'react';
// import PropTypes from 'prop-types';

import * as uStyle from './styled';

const Authorization = () => {
  const a = 'Авторизация';
  return (
    <uStyle.Wrapper>
      <h1>{a}</h1>
      <uStyle.SocialAuthorization>Социальные кнопки</uStyle.SocialAuthorization>
      <uStyle.Form action="/">
        <uStyle.Label htmlFor="user">Email адрес (логин)</uStyle.Label>
        <uStyle.Input type="text" id="user" name="user-login" />
        <uStyle.Label htmlFor="pass">Пароль</uStyle.Label>
        <uStyle.Input type="password" id="pass" name="user-pass" />
        <uStyle.GroupButtons>
          <uStyle.Button type="button">Войти</uStyle.Button>
          <uStyle.Button type="button" signIn>Регистрация</uStyle.Button>
        </uStyle.GroupButtons>
      </uStyle.Form>
    </uStyle.Wrapper>
  );
};

export { Authorization };
