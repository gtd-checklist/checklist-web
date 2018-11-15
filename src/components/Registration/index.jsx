import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { Logo } from '../../ui/Logo';
import back from '../../img/back-forest.jpg';

import { StyledInputReg, StyledDescription } from './styled';
import { StyledBackForm, StyledForm, StyledButton, StyledGoTo, StyledLink } from '../../ui/formStyled';
import { BgImageTransparent, StyledContent, StyledLogo, StyledTitle } from '../../globalStyled';

const Registration = (props) => {
  const { touched, errors, values, handleChange, handleBlur, handleSubmit } = props;

  return (
    <BgImageTransparent container justify="center" back={back} color="primary">
      <Grid item md={6} xs={12}>
        <StyledContent container direction="column" justify="space-between">
          <StyledLogo container justify="center" alignItems="center">
            <Logo />
          </StyledLogo>
          <StyledContent>
            <StyledTitle component="h1" variant="h1" align="center" back="dark">
              Регистрация
            </StyledTitle>
            <StyledBackForm container>
              <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
                <StyledInputReg
                  label="Имя пользователя"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  err={touched.userName && errors.userName}
                  type="text"
                  id="name"
                  name="userName"
                  value={values.userName}
                  placeholder="Пример: Николай"
                  helperText={errors.userName}
                  fullWidth
                  margin="normal"
                />
                <StyledInputReg
                  required
                  label="Email пользователя (логин)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  err={touched.userEmail && errors.userEmail}
                  type="email"
                  id="user"
                  name="userEmail"
                  value={values.userEmail}
                  placeholder="Пример: nikola@mail.ru"
                  helperText={errors.userEmail}
                  fullWidth
                  margin="normal"
                />
                <StyledInputReg
                  required
                  label="Пароль для входа"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  err={touched.userPass && errors.userPass}
                  type="password"
                  id="pass"
                  name="userPass"
                  value={values.userPass}
                  placeholder="любой пароль более 4 символов"
                  helperText={errors.userPass}
                  fullWidth
                  margin="normal"
                />
                <StyledDescription variant="subtitle2">
                  Поля, отмеченные *, обязательны для заполнения
                </StyledDescription>
                <StyledButton variant="contained" type="submit" color="secondary" fullWidth>Создать аккаунт</StyledButton>
              </StyledForm>
              <StyledGoTo align="center" component="p" variant="body1">
                Уже есть аккаунт?
                <StyledLink href="/auth">Войти</StyledLink>
              </StyledGoTo>
            </StyledBackForm>
          </StyledContent>
        </StyledContent>
      </Grid>
    </BgImageTransparent>
  );
};

Registration.propTypes = {
  touched: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

Registration.defaultProps = {
  touched: {},
  errors: {},
  values: {},
  handleSubmit: () => false,
  handleChange: () => false,
  handleBlur: () => false
};

export { Registration };
