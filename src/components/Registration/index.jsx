import React from 'react';
import PropTypes from 'prop-types';

import { Logo } from '../Logo';
import back from '../../img/back-forest.jpg';

import { StyledWrapper, StyledLogo, StyledBackFormReg, StyledInputReg, StyledDescription, StyledGoToReg, StyledLinkReg } from './styled';
import { StyledForm, StyledButton } from '../../ui/formStyled';
import { StyledContent, StyledMainHeader, StyledMainApp } from '../../globalStyled';

const Registration = (props) => {
  const { touched, errors, values, handleChange, handleBlur, handleSubmit } = props;

  return (
    <StyledWrapper container justify="center" back={back} color="primary">
      <StyledMainApp item md={6} xs={12}>
        <StyledContent container direction="column" justify="space-between">
          <StyledLogo container justify="center" alignItems="center">
            <Logo />
          </StyledLogo>
          <StyledContent>
            <StyledMainHeader color="onDark">Регистрация</StyledMainHeader>
            <StyledBackFormReg container>
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
                <StyledDescription>
                  Поля, отмеченные *, обязательны для заполнения
                </StyledDescription>
                <StyledButton variant="contained" type="submit" fullWidth>Создать аккаунт</StyledButton>
              </StyledForm>
              <StyledGoToReg>
                Уже есть аккаунт?
                <StyledLinkReg href="/auth">Войти</StyledLinkReg>
              </StyledGoToReg>
            </StyledBackFormReg>
          </StyledContent>
        </StyledContent>
      </StyledMainApp>
    </StyledWrapper>
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
