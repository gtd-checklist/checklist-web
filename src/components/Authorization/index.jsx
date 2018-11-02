import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { StyledMainHeader } from '../../globalStyled';
import { StyledWrapper, StyledForm, StyledGroupButtons } from '../formStyled';
import { StyledError } from '../../ui/Input/styled';

const Authorization = (props) => {
  const { status, touched, errors, values, handleChange, handleBlur, handleSubmit } = props;

  return (
    <StyledWrapper>
      <StyledMainHeader>Авторизация</StyledMainHeader>
      {status.errorMessage ? <StyledError>{status.errorMessage}</StyledError> : null}
      <StyledForm onSubmit={handleSubmit}>
        <Input
          label="Логин (email)"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userEmail && errors.userEmail}
          type="email"
          id="user"
          name="userEmail"
          value={values.userEmail}
        />
        <Input
          label="Пароль для входа"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userPass && errors.userPass}
          type="password"
          id="pass"
          name="userPass"
          value={values.userPass}
        />
        <StyledGroupButtons>
          <Button
            title="Войти"
            type="submit"
            isSubmit
          />
          <Button
            title="Зарегистрироваться через email"
            type="button"
          />
        </StyledGroupButtons>
      </StyledForm>
    </StyledWrapper>
  );
};

Authorization.propTypes = {
  status: PropTypes.instanceOf(Object),
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func
};

Authorization.defaultProps = {
  status: {},
  touched: {},
  errors: {},
  values: {},
  handleChange: () => false,
  handleBlur: () => false,
  handleSubmit: () => false
};

export { Authorization };
