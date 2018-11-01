import React from 'react';
import PropTypes from 'prop-types';

import { StyledError } from './styled';
import { StyledMainHeader } from '../../globalStyled';
import { StyledWrapper, StyledForm, StyledGroupButtons } from '../formStyled';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';

const Authorization = (props) => {
  const { status, touched, errors, values, handleChange, handleBlur, handleSubmit } = props;

  return (
    <StyledWrapper>
      <StyledMainHeader>Авторизация</StyledMainHeader>
      <StyledError>{status.msg}</StyledError>
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
          placeholder=""
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
          placeholder=""
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
