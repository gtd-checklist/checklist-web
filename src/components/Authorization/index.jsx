import React from 'react';
import PropTypes from 'prop-types';

import { Logo } from '../Logo';
import back from '../../img/back-mountain.jpg';

import { StyledWrapper, StyledLogo, StyledInputAuth, StyledBackFormAuth, StyledGoToAuth, StyledLinkAuth } from './styled';
import { StyledForm, StyledButton, StyledError } from '../../ui/formStyled';
import { StyledContent, StyledMainHeader, StyledMainApp } from '../../globalStyled';

const Authorization = (props) => {
  const { status, touched, errors, values, handleChange, handleBlur, handleSubmit } = props;

  return (
    <StyledWrapper container justify="center" back={back} color="primary">
      <StyledMainApp item md={6} xs={12}>
        <StyledContent container direction="column" justify="space-between">
          <StyledLogo container justify="center" alignItems="center">
            <Logo />
          </StyledLogo>
          <StyledContent>
            <StyledMainHeader color="onDark">Авторизация</StyledMainHeader>
            <StyledBackFormAuth container>
              <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
                {status.errorMessage ? <StyledError>{status.errorMessage}</StyledError> : null}
                <StyledInputAuth
                  id="user"
                  className="customStyle"
                  label="Логин (email)"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  err={touched.userEmail && errors.userEmail}
                  name="userEmail"
                  value={values.userEmail}
                  helperText={errors.userEmail}
                  fullWidth
                  margin="normal"
                />
                <StyledInputAuth
                  id="pass"
                  type="password"
                  label="Пароль для входа"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  err={touched.userPass && errors.userPass}
                  name="userPass"
                  value={values.userPass}
                  helperText={errors.userPass}
                  fullWidth
                  margin="normal"
                />
                <StyledButton variant="contained" type="submit" fullWidth>Войти</StyledButton>
              </StyledForm>
              <StyledGoToAuth>
                Еще нет аккаунта?
                <StyledLinkAuth href="/registration">Регистрация</StyledLinkAuth>
              </StyledGoToAuth>
            </StyledBackFormAuth>
          </StyledContent>
        </StyledContent>
      </StyledMainApp>
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
