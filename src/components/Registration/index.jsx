import React from 'react';
import PropTypes from 'prop-types';

import { StyledDescription } from './styled';
import { StyledMainHeader } from '../../globalStyled';
import { StyledWrapper, StyledForm, StyledGroupButtons } from '../formStyled';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';

const Registration = (props) => {
  const { touched, errors, values, handleChange, handleBlur, handleSubmit } = props;

  return (
    <StyledWrapper>
      <StyledMainHeader>Регистрация</StyledMainHeader>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          label="Имя пользователя"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userName && errors.userName}
          type="text"
          id="name"
          name="userName"
          value={values.userName}
          placeholder="Пример: Николай"
        />
        <Input
          label="Email пользователя (логин)"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userEmail && errors.userEmail}
          type="email"
          id="user"
          name="userEmail"
          value={values.userEmail}
          placeholder="Пример: nikola@mail.ru"
          isRequired
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
          placeholder="любой пароль более 4 символов"
          isRequired
        />
        <StyledDescription>Поля, отмеченные *, обязательны для заполнения</StyledDescription>
        <StyledGroupButtons>
          <Button
            title="Зарегистрироваться"
            type="submit"
            isSubmit
          />
          <Button
            title="Войти через email"
            type="button"
          />
        </StyledGroupButtons>
      </StyledForm>
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
