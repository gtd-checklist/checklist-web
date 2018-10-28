import React from 'react';
import PropTypes from 'prop-types';

import * as uStyle from './styled';

import { Input } from '../../ui/Input';

const UserRegister = (props) => {
  const { touched, errors, values, handleChange, handleBlur, handleSubmit } = props;

  return (
    <uStyle.Wrapper>
      <uStyle.MainHeader>Регистрация</uStyle.MainHeader>
      <uStyle.Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="name"
          name="userName"
          value={values.userName}
          placeholder="Имя"
        />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userEmail && errors.userEmail}
          type="text"
          id="user"
          name="userEmail"
          value={values.userEmail}
          placeholder="Email"
        />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userPass && errors.userPass}
          type="password"
          id="pass"
          name="userPass"
          value={values.userPass}
          placeholder="Password"
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
