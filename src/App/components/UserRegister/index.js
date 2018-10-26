import React from 'react';
import PropTypes from 'prop-types';

import * as uStyle from './styled';

const UserRegister = (props) => {
  const { touched, errors, values, handleChange, handleBlur, handleSubmit } = props;

  return (
    <uStyle.Wrapper>
      <uStyle.MainHeader>Регистрация</uStyle.MainHeader>
      <uStyle.Form onSubmit={handleSubmit}>
        <uStyle.Label htmlFor="name">Имя</uStyle.Label>
        <uStyle.Input
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="name"
          name="userName"
          value={values.userName}
          placeholder="Vasya"
        />
        <uStyle.Label htmlFor="user">
          Email адрес
          {errors.userEmail && touched.userEmail
            ? <uStyle.Error>{errors.userEmail}</uStyle.Error>
            : <uStyle.Hint>(обязательное поле)</uStyle.Hint>}
        </uStyle.Label>
        <uStyle.Input
          onChange={handleChange}
          onBlur={handleBlur}
          err={errors.userEmail}
          type="text"
          id="user"
          name="userEmail"
          value={values.userEmail}
          placeholder="vasya@mail.ru"
        />
        <uStyle.Label htmlFor="pass">
          Пароль
          {errors.userPass && touched.userPass
            ? <uStyle.Error>{errors.userPass}</uStyle.Error>
            : <uStyle.Hint>(обязательное поле)</uStyle.Hint>}
        </uStyle.Label>
        <uStyle.Input
          onChange={handleChange}
          onBlur={handleBlur}
          err={errors.userPass}
          type="password"
          id="pass"
          name="userPass"
          value={values.userPass}
        />
        <uStyle.GroupButtons>
          <uStyle.Button type="submit">Зарегистрироваться</uStyle.Button>
          <uStyle.SignUp type="button">Войти через email</uStyle.SignUp>
        </uStyle.GroupButtons>
      </uStyle.Form>
    </uStyle.Wrapper>
  );
};

UserRegister.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};
UserRegister.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  handleSubmit: () => false,
  handleChange: () => false,
  handleBlur: () => false
};

export { UserRegister };
