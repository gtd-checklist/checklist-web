import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import { Logo } from '../../ui/Logo';
import back from '../../img/back-mountain.jpg';

import { StyledInputAuth } from './styled';
import { StyledBackForm, StyledForm, StyledButton, StyledError, StyledGoTo, StyledLink } from '../../ui/formStyled';
import { BgImageTransparent, StyledContent, StyledLogo, StyledTitle } from '../../globalStyled';

const Authorization = (props) => {
  const { status, touched, errors, values, handleChange, handleBlur, handleSubmit } = props;

  return (
    <BgImageTransparent container justify="center" back={back} color="primary">
      <Grid item md={6} xs={12}>
        <StyledContent container direction="column" justify="space-between">
          <StyledLogo container justify="center" alignItems="center">
            <Logo />
          </StyledLogo>
          <StyledContent>
            <StyledTitle component="h1" variant="h1" align="center" back="dark">
              Авторизация
            </StyledTitle>
            <StyledBackForm container transparent="true">
              <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
                {status.errorMessage ? <StyledError variant="body2">{status.errorMessage}</StyledError> : null}
                <StyledInputAuth
                  id="user"
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
                <StyledButton variant="contained" color="secondary" type="submit" fullWidth>Войти</StyledButton>
              </StyledForm>
              <StyledGoTo align="center" component="p" variant="body1" dark="true">
                Еще нет аккаунта?
                <StyledLink href="/registration" dark>Регистрация</StyledLink>
              </StyledGoTo>
            </StyledBackForm>
          </StyledContent>
        </StyledContent>
      </Grid>
    </BgImageTransparent>
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
